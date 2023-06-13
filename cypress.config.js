const {defineConfig} = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    screenshotsFolder: './cypress/report/screenshot',
    trashAssetsBeforeRuns: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "./cypress/report",
      overwrite: false,
      html: true,
      json: false,
    },
    specPattern: "./cypress/e2e/dashboard/**/*.cy.js",
    video: false,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },
  },
});
