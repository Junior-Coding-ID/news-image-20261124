// News Image 20261124 (v4) - entry runner.
// Copies the pre-rendered entry.png next to this file into the output
// directory required by the bounty harness. No arguments needed.
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.join(here, "entry.png");

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  return "/output";
}

function run(): void {
  if (!fs.existsSync(SOURCE)) {
    throw new Error("entry.png is missing next to main.ts");
  }
  const dir = outputDir();
  fs.mkdirSync(dir, { recursive: true });
  const target = path.join(dir, "entry.png");
  fs.copyFileSync(SOURCE, target);
  const bytes = fs.statSync(target).size;
  console.log(`wrote ${target} (${bytes} bytes)`);
}

run();
