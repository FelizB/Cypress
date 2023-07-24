const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity:false,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSessionAndOrigin:true,
    experimentalStudio:true,
    experimentalModifyObstructiveThirdPartyCode:true,
    retries: {
      "runMode": 0,
      "openMode": 0
     },
    setupNodeEvents(on, config) {
      
    },
    
  },
});
