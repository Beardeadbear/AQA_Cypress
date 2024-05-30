///<reference types="cypress"/>
import 'cypress-xpath';
import 'cypress-iframe';
import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Screenshot.defaults({
  screenshotOnRunFailure: true,
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loginAsAdmin', () => {
  const adminUsername = Cypress.env('adminUsername');
  const adminPassword = Cypress.env('adminPassword');
  cy.visit('https://apps.fliplet.com/fliplet-dev-event-advanced-qr-code-qa-v-5/login-16gp9'); // Replace with your actual login page URL
  cy.get('[name="Email"]').should('be.visible').type(adminUsername);
  cy.get('[name="Password"]').should('be.visible').type(adminPassword);
  cy.xpath("//span[@class='btn-label'][normalize-space()='Log in']").should('be.visible').click();
  cy.url().should('include', '/event-list')
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })