import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    reporter: 'mochawesome',
    reporterOptions: {
      charts: true,
      json: true,
      reportDir: 'reports/e2e',
      reportFilename: 'report',
      overwrite: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
