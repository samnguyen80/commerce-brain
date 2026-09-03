#!/usr/bin/env bun

import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exit(1);
};

const claudeMarket = readJson(".claude-plugin/marketplace.json");
const codexMarket = readJson(".agents/plugins/marketplace.json");
const claudePlugin = readJson("plugins/ecom-knowledge/.claude-plugin/plugin.json");
const codexPlugin = readJson("plugins/ecom-knowledge/.codex-plugin/plugin.json");

if (claudeMarket.name !== codexMarket.name) fail("marketplace names differ");

const claudeEntry = claudeMarket.plugins?.find((p) => p.name === "ecom-knowledge");
const codexEntry = codexMarket.plugins?.find((p) => p.name === "ecom-knowledge");
if (!claudeEntry || !codexEntry) fail("ecom-knowledge is missing from a marketplace");

for (const field of ["name", "version", "description", "author"]) {
  if (JSON.stringify(claudePlugin[field]) !== JSON.stringify(codexPlugin[field])) {
    fail(`plugin field differs between Claude and Codex: ${field}`);
  }
}

if (claudeEntry.version !== claudePlugin.version) fail("Claude marketplace version differs from plugin version");
if (claudeEntry.source !== "./plugins/ecom-knowledge") fail("Claude marketplace source is incorrect");
if (codexEntry.source?.path !== "./plugins/ecom-knowledge") fail("Codex marketplace source is incorrect");

console.log("plugin parity verification passed");
