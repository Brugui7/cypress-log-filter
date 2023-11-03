import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "isady8",
  fixturesFolder: false,
  e2e: {
    specPattern: "cypress/e2e/*.ts",
    env: {
      logLevel: "VERBOSE"
    }
  },
});
