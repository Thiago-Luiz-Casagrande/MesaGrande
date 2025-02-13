import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Redireciona todas as requisições para index.html
  },
});
