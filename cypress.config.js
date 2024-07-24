const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '93uv1q',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
