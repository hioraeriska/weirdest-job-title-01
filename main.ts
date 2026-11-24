// Weirdest Job Title: Blind Judge Showdown
// Writes one job title, 60 characters at most and nothing else,
// to /output/entry.txt for the blind pairwise judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Ghostwriter for Pet Autobiographies";

// The gate only accepts 1-60 characters of UTF-8 text, nothing else.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`title must be 1-60 characters, got ${TITLE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TITLE, "utf8");
