const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
      "adminUsername": "admin@email.com",
      "adminPassword": "Kolos777!",
      "regUsername": "user@email.com",
      "regPassword": "Kolos777!"
    },
    
  e2e:{
    projectId: "7uq78k",
    ///baseUrl: 'http://localhost:1234',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    //specPattern: 'cypress/e2e/**/Onboarding.cy.{js,jsx,ts,tsx}',
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    viewportWidth: 1920,
    viewportHeight: 1080,

  },
});