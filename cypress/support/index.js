// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commandsLogin";
import "./commandsLoginUi";
import "./commands";

module.exports = (on, config) => {
    // Manually added code down below:
    on('before:browser:launch', (browser = {}, args) => {
      if (browser.name === 'chrome') {
        args.push('--disable-site-isolation-trials');
  
        return args
      }
    })
  }