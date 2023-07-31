const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e:{
    ///baseUrl: 'http://localhost:1234',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    viewportWidth: 1920,
    viewportHeight: 1080,

  },
});
