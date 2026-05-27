import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/advertising-avengers/",
  },

  tanstackStart: {
    server: { entry: "server" },
  },
});