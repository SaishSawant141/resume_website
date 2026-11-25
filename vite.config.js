import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the site works on any
// GitHub Pages URL (https://<user>.github.io/<repo>/) without changes.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
