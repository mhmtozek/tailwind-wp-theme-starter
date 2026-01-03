// tailwind-runner.js
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "tailwindcss/lib/cli.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const input = path.join(__dirname, "src/css/input.css");
const output = path.join(__dirname, "dist/css/style.css");

fs.mkdirSync(path.dirname(output), { recursive: true });

build({ input, output, watch: process.argv.includes("--watch") }).then(() =>
    console.log("Tailwind compiled successfully!")
);
