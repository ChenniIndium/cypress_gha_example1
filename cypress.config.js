const { defineConfig } = require("cypress");

module.exports = defineConfig({
  integration: {
    baseUrl: 'https://example.cypress.io/todo',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    integrationFolder: "cypress/integration",
    testFiles: "**/*.js"
  },
})
