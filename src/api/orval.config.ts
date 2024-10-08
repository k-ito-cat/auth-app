import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./docs/auth.yaml",
    },
    output: {
      baseUrl: "/v1",
      mode: "split",
      target: "./generated/api.ts",
      schemas: "./generated/models",
      mock: true,
      client: "axios",
    },
  },
  formSchema: {
    input: {
      target: "./docs/auth.yaml",
    },
    output: {
      target: "./generated/schema/zod.ts",
      client: "zod",
    },
  },
});
