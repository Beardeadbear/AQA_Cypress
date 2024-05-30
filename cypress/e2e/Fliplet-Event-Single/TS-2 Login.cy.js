describe('Login screen', () => {

  beforeEach(() => {
    //Cypress.session.clearAllSavedSessions()
    // Load the Onboarding screen
    cy.visit('https://apps.fliplet.com/fliplet-dev-event-advanced-qr-code-qa-v-5/login-16gp9');
  })
  it('TC-01 Page displaying', () => {
    //cy.title().should("eq", "Login - Event - Advanced cy");
    cy.get('h1').should('be.visible');
    cy.get('[name="Email"]').should("be.visible");
    cy.get('[name="Password"]').should("be.visible");
    cy.contains('Log in').should("be.visible");
    cy.contains('Forgot your password?').should("be.visible");
    cy.contains('Register Here').should("be.visible");
  })

  it('TC-02 Successfull Login', () => {
    cy.get('[name="Email"]').should('be.visible').type('admin@email.com');
    cy.get('[name="Password"]').should('be.visible').type('admin');
    cy.xpath("//span[@class='btn-label'][normalize-space()='Log in']").should('be.visible').click();
    //cy.contains('Log in').click();
    cy.url().should('include', '/event-list')
    
  })
  
  it('TC-03 Failed Login', () => {
    cy.get('[name="Email"]').type('admin@email.com');
    cy.get('[name="Password"]').type('adminn');
    cy.contains('Log in').click();
    cy.url().should('include', '/login')
    cy.contains('Your email or password don\'t match. Please try again.').should('be.visible')

})

  it('TC-04 Failed Login - Empty', () => {
    cy.contains('Log in').click();
    cy.get('.text-danger').should('contain.text', 'Please enter a valid email.');
    
  })

  it('TC-03 Failed Login - Forgot password', () => {
    cy.contains('Forgot your password?').click()
    
  })

})