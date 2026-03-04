const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Your app's local URL
    baseUrl: 'http://localhost:3000',
    // Default viewport size
    viewportWidth: 1280,
    viewportHeight: 720,
    // Automatically record videos of tests
    video: true,
    // Take screenshot when a test fails
    screenshotOnRunFailure: true,
    // Timeout for commands (10 seconds)
    defaultCommandTimeout: 10000,
    // Where your test files are located
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed
    },
  },
});