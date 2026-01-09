import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const base = mode === "github" ? "/trace_App/" : "/trace/";
  return {
    plugins: [react()],
    base,
  };
});
