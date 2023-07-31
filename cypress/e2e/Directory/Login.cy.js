describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://apps.fliplet.com/fliplet-dir-new-cypress-wtgchcuc/login'); // Replace '/onboarding' with the actual URL of your onboarding screen
  });
  it('TC-01 Page displaying', () => {
    cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/login-t4eo');
    cy.title().should("eq", "Login - Event - Advanced cy");
    cy.get('[name="Email"]').should("be.visible");
    cy.get('[name="Password"]').should("be.visible");
    cy.contains('Log in').should("be.visible");
    cy.contains('Forgot your password?').should("be.visible");
    cy.contains('Register Here').should("be.visible");
  })

  it.only('TC-02 Successfull Login', () => {
    cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/login-t4eo');
    cy.get('[name="Email"]').type('admin@email.com');
    cy.get('[name="Password"]').type('admin');
    cy.xpath("//span[@class='btn-label'][normalize-space()='Log in']").click();
    //cy.contains('Log in').click();
    cy.url().should('include', '/event-list')
    
  })
  
  it('TC-03 Failed Login', () => {
    cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/login-t4eo');
    cy.get('[name="Email"]').type('admin@email.com');
    cy.get('[name="Password"]').type('adminn');
    cy.contains('Log in').click();
    cy.url().should('include', '/login')
    cy.contains('Your email or password don\'t match. Please try again.').should('be.visible')

})

  it('TC-04 Failed Login - Empty', () => {
    cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/login-t4eo');
    cy.contains('Log in').click();
    cy.get('.text-danger').should('contain.text', 'Please enter a valid email.');
    
  })

  it('TC-03 Failed Login - Forgot password', () => {
    cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/login-t4eo');
    cy.contains('Forgot your password?').click()
    
  
  })

})