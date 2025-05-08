#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("🌨️  Installing Snoww UI into your project...");

try {
  // Install snow-ui
  execSync('npm install ../', { stdio: 'inherit' });

  // Modify index.css or global.css
  const cssPaths = [
    path.resolve("src", "index.css"),
    path.resolve("src", "global.css")
  ];

  let cssUpdated = false;
  for (const cssPath of cssPaths) {
    if (fs.existsSync(cssPath)) {
      const content = fs.readFileSync(cssPath, "utf8");
      if (!content.includes("@import \"snow-ui")) {
        fs.appendFileSync(cssPath, '\n@import "snow-ui/dist/snow-theme.css";');
        fs.appendFileSync(cssPath, '\n@import "snow-ui/dist/esm/index.css";');
        cssUpdated = true;
        console.log(`✅ CSS imports added to ${path.basename(cssPath)}`);
        break;
      }
    }
  }

  if (!cssUpdated) {
    console.warn("⚠️ No index.css or global.css found. Please import Snow UI styles manually.");
  }

  console.log("🎉 Snow UI installed successfully!");
} catch (err) {
  console.error("❌ Installation failed:", err);
}
