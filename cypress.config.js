const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   specPattern:'tests/Scripts/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      
    },
  },
});
