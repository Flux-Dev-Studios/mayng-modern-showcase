import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  // VVV ADD THIS ENTIRE BLOCK VVV
  preview: {
    host: true, // Listens on all public IPs
    port: 8080, // Make sure this matches your Render port
    allowedHosts: ["mayng-modern-showcase.onrender.com"],
  },
  // ^^^ END OF NEW BLOCK ^^^

  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
