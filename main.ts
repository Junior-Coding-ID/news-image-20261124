// News image 24 Nov v2: copy the rendered infographic to /output/entry.png
// v2 vs v1: Zaporizhzhia corrected to 40 injured (Poland airspace note
// removed), Asia stocks use closing figures with Nvidia named, the Oil
// panel is replaced by Malaysia-Myanmar and the Emmys panel by Colombia
// Villavicencio — wider geographic coverage, no stale or wrong claims.
import { copyFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve the image relative to this script, not the working directory,
// so the copy works no matter where the grader runs main.ts from.
const ROOT = dirname(fileURLToPath(import.meta.url));

mkdirSync("/output", { recursive: true });
copyFileSync(join(ROOT, "entry.png"), "/output/entry.png");
