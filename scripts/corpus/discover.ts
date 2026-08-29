/**
 * Deep-discover URL bai viet cho 1 blog source, khong phu thuoc RSS.
 *
 * fetch.ts (doBlogs) goi discoverArticles() de lay du 100 bai/site thay vi
 * chi 10-50 bai tu RSS goc, va lay duoc ca 12 site khong co RSS.
 *
 * Chien luoc, dung khi da du limit:
 *   1. Sitemap (robots.txt -> Sitemap: hoac /sitemap.xml, /sitemap_index.xml,
 *      /post-sitemap.xml, /blog-sitemap.xml; de quy sitemap index sau depth 2)
 *   2. RSS phan trang (WordPress ?paged=N, Squarespace ?format=rss&offset=<ms>)
 *   3. Trang archive/index phan trang (/page/N/, ?page=N, nut "load more")
 *   4. Fallback: loc long link tu trang index goc (khi 1-3 khong ra gi)
 *
 * Tuan thu: sleep 1s giua request cung domain, khong crawl path bi
 * robots.txt Disallow, khong vuot Cloudflare — 403/429 lien tiep (ctx.get
 * nem loi "BLOCKED ...") thi dung han site do va log ly do, khong bay dat.
 */

export type Found = { url: string; title?: string; date?: string };

type Ctx = {
  limit: number;
  get: (url: string) => Promise<string>;
  log: (msg: string) => void;
  sleep: (ms: number) => Promise<void>;
};

type Site = { slug: string; name: string; url?: string; rss?: string };
type Getter = (url: string) => Promise<string>;
type Logger = (msg: string) => void;

const isBlocked = (e: unknown) => e instanceof Error && e.message.startsWith("BLOCKED");
const dedupe = <T,>(a: T[]) => [...new Set(a)];
const pathSegs = (url: string) => {
  try {
    return new URL(url).pathname.split("/").filter(Boolean);
  } catch {
    return [];
  }
};

/**
 * So sanh host bo qua "www." va scheme. Nhieu site khai bao robots.txt/sitemap
 * lech domain voi URL cau hinh (vd nfx.com khong-www trong khi source.url dung
 * www.nfx.com; marketplacepulse tra http:// trong khi source.url la https://)
 * — dung startsWith(origin) thuan se loc rot het, nen so theo hostname.
 */
function sameSite(url: string, origin: string): boolean {
  try {
    const a = new URL(url).hostname.replace(/^www\./, "");
    const b = new URL(origin).hostname.replace(/^www\./, "");
    return a === b;
  } catch {
    return false;
  }
}

/**
 * Khi site.url la 1 bai le (khong phai trang index, vd nfx.com/post/xxx) hoac
 * mot trang con co path rieng (vd marketplacepulse.com/articles), segment dau
 * cua path do thuong la prefix chung cho toan bo bai viet cung site. Dung de
 * loc bot trang tinh (about/contact/...) lac vao sitemap chung.
 */
function seedPathPrefix(site: Site): string | null {
  if (!site.url) return null;
  const segs = pathSegs(site.url);
  return segs.length ? `/${segs[0]}/` : null;
}

/** Rate-limit: 1s giua moi request thuc su goi qua ctx.get (site chi co 1 domain). */
function rateLimited(ctx: Ctx): Getter {
  let first = true;
  return async (url: string) => {
    if (!first) await ctx.sleep(1000);
    first = false;
    return ctx.get(url);
  };
}

function isAllowed(url: string, disallow: string[]): boolean {
  if (!disallow.length) return true;
  let path: string;
  try {
    path = new URL(url).pathname;
  } catch {
    return true;
  }
  return !disallow.some((rule) => rule && path.startsWith(rule));
}

const NON_ARTICLE_SEGMENTS =
  /\/(tag|tags|category|categories|author|page|wp-json|wp-content|wp-admin|feed|comments?|cart|checkout|account|login|search|cdn-cgi)(\/|$)/i;
const NON_ARTICLE_EXT = /\.(png|jpe?g|svg|gif|css|js|pdf|zip|webp|ico|mp4|mp3|json|xml)(\?|$)/i;

function isLikelyArticleUrl(url: string, origin: string): boolean {
  if (!sameSite(url, origin)) return false;
  if (NON_ARTICLE_SEGMENTS.test(url) || NON_ARTICLE_EXT.test(url)) return false;
  const p = (() => {
    try {
      return new URL(url).pathname;
    } catch {
      return "";
    }
  })();
  return p !== "" && p !== "/";
}

// ---------------------------------------------------------------- sitemap

async function fetchRobots(origin: string, get: Getter, log: Logger): Promise<{ sitemaps: string[]; disallow: string[] }> {
  try {
    const txt = await get(`${origin}/robots.txt`);
    const sitemaps = [...txt.matchAll(/^\s*Sitemap:\s*(\S+)/gim)].map((m) => m[1].trim());
    const disallow: string[] = [];
    let relevant = false;
    for (const raw of txt.split("\n")) {
      const line = raw.trim();
      const ua = line.match(/^User-agent:\s*(.+)$/i);
      if (ua) {
        relevant = ua[1].trim() === "*";
        continue;
      }
      if (relevant) {
        const d = line.match(/^Disallow:\s*(\S*)/i);
        if (d && d[1]) disallow.push(d[1].trim());
      }
    }
    return { sitemaps, disallow };
  } catch (e) {
    if (isBlocked(e)) throw e;
    log(`  robots.txt khong doc duoc: ${(e as Error).message}`);
    return { sitemaps: [], disallow: [] };
  }
}

type SitemapEntry = { loc: string; lastmod?: string };

const MONTHS: Record<string, number> = {
  jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2, apr: 3, april: 3,
  may: 4, jun: 5, june: 5, jul: 6, july: 6, aug: 7, august: 7,
  sep: 8, september: 8, oct: 9, october: 9, nov: 10, november: 10, dec: 11, december: 11,
};

/** Doan nam/thang trong URL sitemap con kieu /archive/2026/august.xml — huu ich khi index khong co lastmod. */
function extractDateFromChildUrl(url: string): number | null {
  const path = (() => {
    try {
      return new URL(url).pathname.toLowerCase();
    } catch {
      return url.toLowerCase();
    }
  })();
  const y = path.match(/(19|20)\d{2}/);
  if (!y) return null;
  const year = Number(y[0]);
  const rest = path.slice((y.index ?? 0) + y[0].length);
  const monthName = rest.match(/[a-z]{3,9}/)?.[0];
  const month = monthName && monthName in MONTHS ? MONTHS[monthName] : Number(rest.match(/(0[1-9]|1[0-2])(?!\d)/)?.[1] ?? 1) - 1;
  return Date.UTC(year, Math.max(0, month), 1);
}

/**
 * Sap xep con cua sitemap index truoc khi cat con 15 dau (tranh crawl toan bo
 * hang tram file khi site co archive theo thang/nam). Uu tien theo tin cay:
 * 1) <lastmod> ngay tren chinh entry <sitemap> trong index (chuan sitemap.org)
 * 2) nam/thang doan duoc tu URL con (vd .../archive/2026/august.xml)
 * 3) giu nguyen thu tu goc — KHONG doan dai (tung gap sai voi site da sort
 *    san newest-first, doan nguoc lai lam mat het bai moi).
 */
function orderSitemapChildren(children: { loc: string; lastmod?: string }[]): string[] {
  const withIndexDate = children.filter((c) => c.lastmod && !Number.isNaN(Date.parse(c.lastmod)));
  if (withIndexDate.length >= Math.ceil(children.length / 2)) {
    return [...children]
      .sort((a, b) => (b.lastmod ? Date.parse(b.lastmod) || 0 : 0) - (a.lastmod ? Date.parse(a.lastmod) || 0 : 0))
      .map((c) => c.loc);
  }
  const withUrlDate = children.map((c) => ({ loc: c.loc, d: extractDateFromChildUrl(c.loc) }));
  const dated = withUrlDate.filter((x) => x.d !== null);
  if (dated.length >= Math.min(3, children.length)) {
    const undated = withUrlDate.filter((x) => x.d === null).map((x) => x.loc);
    return [...dated].sort((a, b) => (b.d as number) - (a.d as number)).map((x) => x.loc).concat(undated);
  }
  return children.map((c) => c.loc);
}

/** De quy sitemap index toi da depth 2. */
async function fetchSitemapEntries(
  url: string,
  get: Getter,
  disallow: string[],
  depth: number,
  visited: Set<string>,
  log: Logger,
): Promise<SitemapEntry[]> {
  if (depth > 2 || visited.has(url) || !isAllowed(url, disallow)) return [];
  visited.add(url);
  let xml: string;
  try {
    xml = await get(url);
  } catch (e) {
    if (isBlocked(e)) throw e;
    return [];
  }
  if (/<sitemapindex/i.test(xml)) {
    const children = [...xml.matchAll(/<sitemap>([\s\S]*?)<\/sitemap>/gi)]
      .map((m) => ({
        loc: m[1].match(/<loc>([^<]+)<\/loc>/i)?.[1]?.trim() ?? "",
        lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/i)?.[1]?.trim(),
      }))
      .filter((c) => c.loc);
    const ordered = orderSitemapChildren(children).slice(0, 15);
    let all: SitemapEntry[] = [];
    for (const child of ordered) {
      all = all.concat(await fetchSitemapEntries(child, get, disallow, depth + 1, visited, log));
      if (all.length >= 300) break; // du candidate tho de sort+cat sau, tranh crawl qua rong
    }
    return all;
  }
  if (!/<urlset/i.test(xml)) return [];
  const blocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/gi)].map((m) => m[1]);
  const out: SitemapEntry[] = [];
  for (const b of blocks) {
    const loc = b.match(/<loc>([^<]+)<\/loc>/i)?.[1]?.trim();
    if (!loc) continue;
    out.push({ loc, lastmod: b.match(/<lastmod>([^<]+)<\/lastmod>/i)?.[1]?.trim() });
  }
  return out;
}

async function discoverFromSitemap(
  site: Site,
  get: Getter,
  limit: number,
  log: Logger,
): Promise<{ items: Found[]; disallow: string[] }> {
  const seed = site.url ?? site.rss;
  if (!seed) return { items: [], disallow: [] };
  let origin: string;
  try {
    origin = new URL(seed).origin;
  } catch {
    return { items: [], disallow: [] };
  }
  const prefix = seedPathPrefix(site);

  const { sitemaps, disallow } = await fetchRobots(origin, get, log);
  const candidates = dedupe(
    sitemaps.length
      ? sitemaps
      : ["/sitemap.xml", "/sitemap_index.xml", "/post-sitemap.xml", "/blog-sitemap.xml"].map((p) => origin + p),
  );

  const visited = new Set<string>();
  let raw: SitemapEntry[] = [];
  for (const c of candidates) {
    if (raw.length >= limit * 3) break;
    raw = raw.concat(await fetchSitemapEntries(c, get, disallow, 0, visited, log));
  }

  const byLoc = new Map<string, SitemapEntry>();
  for (const r of raw) if (!byLoc.has(r.loc)) byLoc.set(r.loc, r);

  const list = [...byLoc.values()]
    .filter((e) => isAllowed(e.loc, disallow) && isLikelyArticleUrl(e.loc, origin))
    .filter((e) => {
      if (!prefix) return true;
      const p = (() => {
        try {
          return new URL(e.loc).pathname;
        } catch {
          return "";
        }
      })();
      return p.startsWith(prefix);
    })
    .sort((a, b) => (b.lastmod ? Date.parse(b.lastmod) || 0 : 0) - (a.lastmod ? Date.parse(a.lastmod) || 0 : 0));

  return { items: list.slice(0, limit).map((e) => ({ url: e.loc, date: e.lastmod })), disallow };
}

// -------------------------------------------------------------------- rss

const decodeEntities = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

function parseFeedItems(xml: string): Found[] {
  const items: Found[] = [];
  const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) ?? [];
  for (const b of blocks) {
    const pick = (t: string) => {
      const m = b.match(new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`, "i"));
      return m ? decodeEntities(m[1]).replace(/<[^>]+>/g, "").trim() : "";
    };
    let link = pick("link");
    if (!link) link = b.match(/<link[^>]+href="([^"]+)"/i)?.[1] ?? "";
    if (!link) link = pick("guid");
    if (!link || !/^https?:\/\//.test(link)) continue;
    items.push({ url: link, title: pick("title") || undefined, date: pick("pubDate") || pick("published") || pick("updated") || undefined });
  }
  return items;
}

/** RSS phan trang: chi thu khi feed goc chua du `limit`. */
async function discoverFromRss(site: Site, get: Getter, limit: number, log: Logger): Promise<Found[]> {
  if (!site.rss) return [];
  const collected = new Map<string, Found>();

  let xml: string;
  try {
    xml = await get(site.rss);
  } catch (e) {
    if (isBlocked(e)) throw e;
    log(`  rss goc loi: ${(e as Error).message}`);
    return [];
  }
  for (const it of parseFeedItems(xml)) collected.set(it.url, it);
  if (collected.size >= limit) return [...collected.values()];

  // WordPress-style ?paged=N
  for (let p = 2; p <= 6 && collected.size < limit; p++) {
    const url = `${site.rss}${site.rss.includes("?") ? "&" : "?"}paged=${p}`;
    try {
      const items = parseFeedItems(await get(url));
      if (!items.length) break;
      const before = collected.size;
      for (const it of items) collected.set(it.url, it);
      if (collected.size === before) break; // khong co gi moi -> site nay khong ho tro paged
    } catch (e) {
      if (isBlocked(e)) throw e;
      break;
    }
  }
  if (collected.size >= limit) return [...collected.values()];

  // Squarespace-style ?format=rss&offset=<epoch ms cua bai cu nhat da co>
  for (let i = 0; i < 5 && collected.size < limit; i++) {
    const dates = [...collected.values()].map((v) => (v.date ? Date.parse(v.date) : NaN)).filter((n) => !Number.isNaN(n));
    if (!dates.length) break;
    const oldest = Math.min(...dates);
    const url = `${site.rss}${site.rss.includes("?") ? "&" : "?"}format=rss&offset=${oldest}`;
    try {
      const items = parseFeedItems(await get(url));
      if (!items.length) break;
      const before = collected.size;
      for (const it of items) collected.set(it.url, it);
      if (collected.size === before) break;
    } catch (e) {
      if (isBlocked(e)) throw e;
      break;
    }
  }
  return [...collected.values()];
}

// ---------------------------------------------------------------- archive

const decodeShort = (s: string) => s.replace(/&amp;/g, "&").replace(/&#0?39;|&apos;/g, "'").replace(/&quot;/g, '"');

/**
 * Trich link "co ve la bai viet" tu 1 trang HTML: cung origin, sau hon trang
 * goc (baseDepth) HOAC cung prefix voi trang goc (truong hop trang goc la 1
 * bai le nhu nfx — xem ghi chu o discoverFromArchive). loose=true bo qua
 * dieu kien do sau, dung lam fallback cuoi cung khi khong tim duoc gi.
 */
function extractArticleLinks(html: string, origin: string, baseDepth: number, seedPrefix: string | null, loose: boolean): Found[] {
  const anchorRe = /<a\b[^>]*href="([^"#]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  const out = new Map<string, Found>();
  let m: RegExpExecArray | null;
  while ((m = anchorRe.exec(html))) {
    const hrefRaw = m[1].split("?")[0];
    const text = decodeShort(m[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
    const abs = hrefRaw.startsWith("http") ? hrefRaw : hrefRaw.startsWith("/") ? origin + hrefRaw : null;
    if (!abs || !sameSite(abs, origin)) continue;
    if (NON_ARTICLE_SEGMENTS.test(abs) || NON_ARTICLE_EXT.test(abs)) continue;
    let pathname: string;
    try {
      pathname = new URL(abs).pathname;
    } catch {
      continue;
    }
    if (pathname === "" || pathname === "/") continue;
    const segs = pathname.split("/").filter(Boolean);
    const deeper = segs.length > baseDepth;
    const sibling = !!seedPrefix && pathname.startsWith(seedPrefix) && segs.length >= baseDepth;
    if (!loose && !deeper && !sibling) continue;
    if (!out.has(abs)) out.set(abs, { url: abs, title: text || undefined });
  }
  return [...out.values()];
}

/** Tim link "Load more" / "Older posts" / "Next" trong HTML de uu tien hon doan URL. */
function findNextPageLink(html: string, origin: string): string | null {
  const re = /<a\b[^>]*href="([^"#]+)"[^>]*>([\s\S]{0,80}?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = m[2].replace(/<[^>]+>/g, " ").trim().toLowerCase();
    if (/load more|older posts?|next page|^next$|»/.test(text)) {
      const href = m[1];
      const abs = href.startsWith("http") ? href : href.startsWith("/") ? origin + href : null;
      if (abs && sameSite(abs, origin)) return abs;
    }
  }
  return null;
}

/**
 * Phan trang archive/index. `seedUrl` co the la trang index (vd /blog/) hoac
 * mot bai le (vd nfx.com/post/xxx khi source khong co trang index rieng) —
 * quyet dinh: van dung origin cua no de tim sitemap/archive, va coi cac link
 * cung "prefix" voi bai le do (vd /post/) la bai viet du KHONG sau hon.
 */
async function discoverFromArchive(seedUrl: string, get: Getter, limit: number, disallow: string[], log: Logger): Promise<Found[]> {
  const origin = new URL(seedUrl).origin;
  const segs = pathSegs(seedUrl);
  const baseDepth = segs.length;
  const seedPrefix = baseDepth >= 1 ? `/${segs[0]}/` : null;

  const collected = new Map<string, Found>();
  const visitedPages = new Set<string>();
  const queue: string[] = [seedUrl];
  let firstPageHtml: string | null = null;
  let pageNum = 1;

  while (queue.length && collected.size < limit && pageNum <= 6) {
    const pageUrl = queue.shift()!;
    if (visitedPages.has(pageUrl) || !isAllowed(pageUrl, disallow)) continue;
    visitedPages.add(pageUrl);

    let html: string;
    try {
      html = await get(pageUrl);
    } catch (e) {
      if (isBlocked(e)) throw e;
      break;
    }
    if (firstPageHtml === null) firstPageHtml = html;

    const links = extractArticleLinks(html, origin, baseDepth, seedPrefix, false).filter((l) => isAllowed(l.url, disallow));
    const before = collected.size;
    for (const l of links) {
      if (!collected.has(l.url)) collected.set(l.url, l);
      if (collected.size >= limit) break;
    }
    if (collected.size >= limit) break;

    pageNum++;
    const next = findNextPageLink(html, origin);
    if (next && !visitedPages.has(next)) queue.push(next);
    else if (pageNum <= 6) {
      queue.push(`${seedUrl.replace(/\/$/, "")}/page/${pageNum}/`, `${seedUrl}${seedUrl.includes("?") ? "&" : "?"}page=${pageNum}`);
    }
    // trang phan trang (khong phai trang dau) khong sinh them link moi -> coi nhu het bai, dung doan
    if (collected.size === before && pageUrl !== seedUrl) break;
  }

  if (collected.size === 0 && firstPageHtml) {
    const loose = extractArticleLinks(firstPageHtml, origin, baseDepth, seedPrefix, true).filter((l) => isAllowed(l.url, disallow));
    for (const l of loose) {
      if (!collected.has(l.url)) collected.set(l.url, l);
      if (collected.size >= limit) break;
    }
    if (loose.length) log(`  fallback loi long tren trang goc: ${loose.length} link`);
  }

  return [...collected.values()];
}

// ---------------------------------------------------------------- main

export async function discoverArticles(site: Site, ctx: Ctx): Promise<Found[]> {
  const { limit, log } = ctx;
  const get = rateLimited(ctx);
  const collected = new Map<string, Found>();
  const add = (items: Found[]) => {
    for (const it of items) if (!collected.has(it.url)) collected.set(it.url, it);
  };

  let disallow: string[] = [];
  try {
    const sm = await discoverFromSitemap(site, get, limit, log);
    disallow = sm.disallow;
    add(sm.items);
    log(`[${site.slug}] sitemap: ${sm.items.length} url`);
  } catch (e) {
    if (isBlocked(e)) {
      log(`[${site.slug}] bi chan (sitemap): ${(e as Error).message} -> bo site`);
      return [...collected.values()].slice(0, limit);
    }
    log(`[${site.slug}] sitemap loi: ${(e as Error).message}`);
  }

  if (collected.size < limit && site.rss) {
    try {
      const rss = await discoverFromRss(site, get, limit - collected.size, log);
      add(rss);
      log(`[${site.slug}] rss(+phan trang): ${rss.length} url`);
    } catch (e) {
      if (isBlocked(e)) {
        log(`[${site.slug}] bi chan (rss): ${(e as Error).message} -> bo site`);
        return [...collected.values()].slice(0, limit);
      }
      log(`[${site.slug}] rss loi: ${(e as Error).message}`);
    }
  }

  if (collected.size < limit) {
    const seedUrl = site.url ?? (site.rss ? `${new URL(site.rss).origin}/` : undefined);
    if (seedUrl) {
      try {
        const arch = await discoverFromArchive(seedUrl, get, limit - collected.size, disallow, log);
        add(arch);
        log(`[${site.slug}] archive/phan trang: ${arch.length} url`);
      } catch (e) {
        if (isBlocked(e)) {
          log(`[${site.slug}] bi chan (archive): ${(e as Error).message} -> bo site`);
          return [...collected.values()].slice(0, limit);
        }
        log(`[${site.slug}] archive loi: ${(e as Error).message}`);
      }
    }
  }

  return [...collected.values()].slice(0, limit);
}
