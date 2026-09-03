#!/usr/bin/env bun

import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join, relative } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const PLUGIN = join(ROOT, "plugins/ecom-knowledge");
const KNOWLEDGE = join(PLUGIN, "knowledge");
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exit(1);
};
const assert = (condition, message) => { if (!condition) fail(message); };
const read = (path) => readFileSync(path, "utf8");
const json = (path) => JSON.parse(read(path));

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, out);
    else out.push(path);
  }
  return out;
}

const expectedSkills = [
  "ask-ecom",
  "classify-commerce-model",
  "compare-commerce-models",
  "diagnose-merchant",
  "ecom-overview",
  "opportunity-map-avada",
  "teach-ecom",
];

const expectedModels = [
  "agentic-commerce",
  "b2b-wholesale",
  "b2b2c-marketplace-operator",
  "creator-affiliate-commerce",
  "digital-products",
  "dtc",
  "handmade-craft",
  "marketplace-seller",
  "recommerce-resale",
  "rental-commerce",
  "retail-omnichannel",
  "social-live-commerce",
  "subscription-box-kitting",
];

function verifyManifests() {
  const cp = json(join(PLUGIN, ".claude-plugin/plugin.json"));
  const xp = json(join(PLUGIN, ".codex-plugin/plugin.json"));
  const cm = json(join(ROOT, ".claude-plugin/marketplace.json"));
  const xm = json(join(ROOT, ".agents/plugins/marketplace.json"));

  for (const p of [cp, xp]) {
    assert(p.name === "ecom-knowledge", "plugin name must be ecom-knowledge");
    assert(/^\d+\.\d+\.\d+$/.test(p.version), "plugin version must be strict semver");
    assert(p.author?.name === "Avada Group", "plugin author must identify Avada Group");
    assert(!p.description.toLowerCase().includes("scaffold"), "scaffold description remains");
  }
  for (const field of ["name", "version", "description", "author"]) {
    assert(JSON.stringify(cp[field]) === JSON.stringify(xp[field]), `Claude/Codex drift: ${field}`);
  }
  assert(cm.name === "commerce-brain" && xm.name === "commerce-brain", "marketplace name drift");
  const ce = cm.plugins.find((p) => p.name === "ecom-knowledge");
  const xe = xm.plugins.find((p) => p.name === "ecom-knowledge");
  assert(ce?.source === "./plugins/ecom-knowledge", "Claude marketplace path is wrong");
  assert(ce?.version === cp.version, "Claude marketplace version drift");
  assert(xe?.source?.source === "local" && xe?.source?.path === "./plugins/ecom-knowledge", "Codex marketplace path is wrong");
  assert(xe?.policy?.installation === "AVAILABLE" && xe?.policy?.authentication === "ON_INSTALL", "Codex marketplace policy is incomplete");
  console.log("manifests verification passed");
}

function frontmatter(text, path) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  assert(match, `${path}: missing frontmatter`);
  const fields = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-z-]+):\s*(.*)$/);
    if (m) fields[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
  return fields;
}

function verifyRouting() {
  const skillDir = join(PLUGIN, "skills");
  const commandDir = join(PLUGIN, "commands");
  const skills = readdirSync(skillDir, { withFileTypes: true }).filter((e) => e.isDirectory()).map((e) => e.name).sort();
  assert(JSON.stringify(skills) === JSON.stringify(expectedSkills), `skill set differs: ${skills.join(", ")}`);

  const commands = readdirSync(commandDir).filter((n) => n.endsWith(".md")).map((n) => n.slice(0, -3)).sort();
  const expectedCommands = expectedSkills.map((n) => n === "ask-ecom" ? "ecom" : n).sort();
  assert(JSON.stringify(commands) === JSON.stringify(expectedCommands), `command set differs: ${commands.join(", ")}`);

  for (const name of expectedSkills) {
    const path = join(skillDir, name, "SKILL.md");
    assert(existsSync(path), `${name}: SKILL.md missing`);
    const text = read(path);
    const fm = frontmatter(text, relative(ROOT, path));
    assert(fm.name === name, `${name}: frontmatter name differs`);
    assert((fm.description ?? "").length >= 50, `${name}: description is not discriminating`);
    assert(!text.includes("${CLAUDE_PLUGIN_ROOT}"), `${name}: harness-specific root variable used`);

    const command = name === "ask-ecom" ? "ecom" : name;
    const shim = read(join(commandDir, `${command}.md`));
    assert(shim.includes(`Run skill \`${name}\``), `${command}: command does not route to ${name}`);
  }

  const resolver = read(join(ROOT, "shared/RESOLVER.md"));
  for (const name of expectedSkills) assert(resolver.includes(`\`${name}\``), `resolver omits ${name}`);
  console.log("routing verification passed");
}

function verifyKnowledge() {
  for (const file of [
    "index.md",
    "foundations/glossary.md",
    "foundations/master-playbook.md",
    "concepts/two-axis-taxonomy.md",
    "concepts/model-card-method.md",
    "concepts/evidence-and-coverage.md",
    "sources/source-register.md",
  ]) assert(existsSync(join(KNOWLEDGE, file)), `knowledge file missing: ${file}`);

  const modelDir = join(KNOWLEDGE, "business-models");
  const models = readdirSync(modelDir).filter((n) => n.endsWith(".md")).map((n) => n.slice(0, -3)).sort();
  assert(JSON.stringify(models) === JSON.stringify(expectedModels), `expected exactly 13 model cards; found ${models.length}`);

  const index = read(join(KNOWLEDGE, "index.md"));
  const requiredSections = ["## Model", "## Economics and operations", "## Growth and defensibility", "## Failure modes", "## Avada opportunities", "## Evidence"];
  for (const model of models) {
    const path = join(modelDir, `${model}.md`);
    const text = read(path);
    const fm = frontmatter(text, relative(ROOT, path));
    for (const field of ["title", "axis", "verified", "coverage"]) assert(fm[field], `${model}: missing ${field}`);
    assert(["fulfillment", "channel"].includes(fm.axis), `${model}: invalid axis`);
    for (const section of requiredSections) assert(text.includes(section), `${model}: missing section ${section}`);
    assert(index.includes(`[[${model}]]`), `knowledge index omits ${model}`);
  }

  const allNotes = walk(KNOWLEDGE).filter((p) => p.endsWith(".md"));
  const names = new Set(allNotes.map((p) => basename(p, ".md")));
  for (const path of allNotes) {
    for (const match of read(path).matchAll(/\[\[([^\]|#]+)(?:[|#][^\]]*)?\]\]/g)) {
      const target = basename(match[1]);
      assert(names.has(target), `${relative(ROOT, path)}: broken wikilink [[${match[1]}]]`);
    }
  }
  console.log("knowledge verification passed");
}

function hygieneProblems(files, synthetic = false) {
  const problems = [];
  const secretPatterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /\bghp_[A-Za-z0-9]{20,}\b/, /\bsk-[A-Za-z0-9]{20,}\b/];
  for (const file of files) {
    const path = synthetic ? file.path : relative(PLUGIN, file);
    const size = synthetic ? file.size : statSync(file).size;
    const text = synthetic ? file.text : read(file);
    if (size > 1_000_000) problems.push(`${path}: oversized`);
    if (/(^|\/)(corpus|raw|transcripts?)(\/|$)/i.test(path)) problems.push(`${path}: raw evidence copied`);
    if (/\.(mp3|mp4|m4a|wav|vtt|srt|db|sqlite|zip)$/i.test(path)) problems.push(`${path}: disallowed binary/media`);
    if (/\[TODO:|TODO_PLACEHOLDER|local plugin scaffold/i.test(text)) problems.push(`${path}: placeholder`);
    if (secretPatterns.some((pattern) => pattern.test(text))) problems.push(`${path}: possible secret`);
  }
  return problems;
}

function verifyHygiene() {
  const positive = hygieneProblems([
    { path: "raw/transcript.md", size: 20, text: "[TODO: fill]" },
    { path: "skills/leak.txt", size: 20, text: "-----BEGIN PRIVATE KEY-----" },
    { path: "assets/huge.bin", size: 1_000_001, text: "" },
  ], true);
  assert(positive.length >= 4, "hygiene positive control did not detect known violations");

  const problems = hygieneProblems(walk(PLUGIN));
  assert(problems.length === 0, problems.join("; "));
  console.log("hygiene verification passed");
}

function verifyDocs() {
  const readme = read(join(ROOT, "README.md"));
  for (const token of [
    "5.899",
    "ecom-knowledge",
    "codex plugin marketplace add",
    "/ecom-overview",
    "Deep corpus",
    "catalog-only",
    "không được redistribute",
  ]) assert(readme.toLocaleLowerCase("vi").includes(token.toLocaleLowerCase("vi")), `README omits: ${token}`);
  assert(readme.includes("DTC/B2B/Retail/B2B2C"), "README does not disclose concentrated deep coverage");
  console.log("docs verification passed");
}

const command = process.argv[2] ?? "all";
const runners = {
  manifests: verifyManifests,
  routing: verifyRouting,
  knowledge: verifyKnowledge,
  hygiene: verifyHygiene,
  docs: verifyDocs,
};

if (command === "all") {
  for (const runner of Object.values(runners)) runner();
  console.log("ecom plugin verification passed");
} else if (runners[command]) {
  runners[command]();
} else {
  fail(`unknown command: ${command}`);
}
