/* import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});  */

const { defineConfig } = require("cypress");
// Export the configuration using CommonJS syntax      // Es modules, commonjs modules kiyala dekak thiyenawa ? 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here    },
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});  




