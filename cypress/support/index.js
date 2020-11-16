import './commands'
require('cypress-xpath')
require('cypress-plugin-retries')


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  