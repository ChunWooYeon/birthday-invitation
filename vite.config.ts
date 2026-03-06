import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import fs from "fs"

import pkg from "./package.json"
import { createHtmlPlugin } from "vite-plugin-html"
import {
  GROOM_FIRSTNAME,
  GROOM_FULLNAME,
  BIRTHDAY_DATE,
  LOCATION,
  BIRTHDAY_DATE_FORMAT,
} from "./src/const"

const distFolder = "build"

let base = "/"

try {
  const url = new URL(pkg.homepage)
  base = url.pathname
} catch {
  base = pkg.homepage || "/"
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          GROOM_FIRSTNAME,
          GROOM_FULLNAME,
          DESCRIPTION: `${BIRTHDAY_DATE.format(BIRTHDAY_DATE_FORMAT)} ${LOCATION}`,
        },
      },
    }),
    {
      name: "manifest-inject",
      writeBundle() {
        const content = fs.readFileSync("public/manifest.json", "utf-8")
        const processed = content.replace(/<%= GROOM_FULLNAME %>/g, GROOM_FULLNAME)
        fs.writeFileSync(`${distFolder}/manifest.json`, processed)
      },
    },
  ],
  server: { port: 3000 },
  build: { outDir: distFolder },
  base,
})
