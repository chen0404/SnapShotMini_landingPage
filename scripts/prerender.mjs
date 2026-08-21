import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const indexPath = new URL("dist/index.html", `file://${projectRoot}`);
const serverEntry = new URL("node_modules/.snapshot-ssr/entry-server.js", `file://${projectRoot}`);
const rootMarker = '<div id="root"></div>';

const [{ render }, template] = await Promise.all([
  import(serverEntry.href),
  readFile(indexPath, "utf8"),
]);

if (!template.includes(rootMarker)) {
  throw new Error("Prerender failed: root marker was not found in dist/index.html.");
}

const appHtml = render();
if (!appHtml.includes("SnapShotMini") || !appHtml.includes("桌上型拍貼機")) {
  throw new Error("Prerender failed: expected product content is missing.");
}

const output = template.replace(rootMarker, `<div id="root">${appHtml}</div>`);
await writeFile(indexPath, output);

console.log("Prerendered the SnapShotMini homepage into dist/index.html.");
