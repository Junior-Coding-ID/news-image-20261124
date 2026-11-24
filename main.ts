// news-image-20261124 v3 — copy the rendered entry image to /output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const dest = join("/output", "entry.png");

// The output directory may not exist yet in the grading sandbox.
mkdirSync("/output", { recursive: true });

copyFileSync(src, dest);
console.log("entry.png copied to /output/entry.png");
// Done — the bundled entry image is ready for grading.
