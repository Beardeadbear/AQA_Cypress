describe('Registration', () => {

    beforeEach(() => {
        Cypress.session.clearAllSavedSessions();
        cy.visit('https://apps.fliplet.com/fliplet-dev-event-advanced-qr-code-qa-v-5/login-16gp9')
        cy.get("a[data-inline-link-id='21585616']").click()
        cy.url().should('include', '/account-registration')
      })

    it('Page displaying', () => {
        cy.get('span.fl-widget-instance > .btn').should('be.visible');
        cy.get('h1').should('have.text', 'Account Registration');
        cy.get('#First\\ Name').should('be.visible');
        cy.get('#Last\\ Name').should('be.visible');
        cy.get('#Email').should('be.visible');
        cy.get('#Password').should('be.visible');
        cy.get('#confirmPassword').should('be.visible');
        cy.get('#Telephone').should('be.visible');
        cy.get('#Company').should('be.visible');
        cy.get('#Title').should('be.visible');
        cy.get('#Expertize').should('be.visible');
        cy.get('#Sectors').should('be.visible');
        cy.get('#Location').should('be.visible');
        cy.get('#Linkedin').should('be.visible');
        cy.get('.form-group > .btn').should('be.visible');
        cy.iframe('#bio-21585502_ifr').find("p").should('be.visible');
        cy.get('.col-xs-12 > .btn').should('be.visible');
      });
    
    it('User is able to register with a new account by filling in all required fields with valid data', () => {
        cy.get('#First\\ Name').type('Web');
        cy.get('#Last\\ Name').type('Web');
        cy.get('#Email').type('ikolosov+web@fliplet.com');
        cy.get('#Password').type('Kolos777!');
        cy.get('#confirmPassword').should('be.visible').type('Kolos777!');
        cy.get('#Telephone').type('777777777');
        cy.get('#Company').type('Fliplet');
        cy.get('#Title').type('QA');
        cy.get('#Expertize').type('QA');
        cy.get('#Sectors').type('QA');
        cy.get('#Location').type('QA');
        cy.get('#Linkedin').type('QA');
        cy.get('.form-group > .btn').click({force: true}).selectFile('cypress/fixtures/test_image.jpg');
        cy.iframe('#bio-21585502_ifr').find("p").type("Lorem ipsum").should('be.visible');
        cy.get('.col-xs-12 > .btn').click()
        cy.url().should('include', '/login')
     });
  
    it('User is able to log into account with new login credantials', () => {
        cy.get('#First\\ Name').type('iOS');
        cy.get('#Last\\ Name').type('iOS');
        cy.get('#Email').type('ikolosov+ios@fliplet.com');
        cy.get('#Password').type('Kolos777!');
        cy.get('#confirmPassword').should('be.visible').type('Kolos777!');
        cy.get('#Telephone').type('777777777');
        cy.get('#Company').type('Fliplet');
        cy.get('#Title').type('QA');
        cy.get('#Expertize').type('QA');
        cy.get('#Sectors').type('QA');
        cy.get('#Location').type('QA');
        cy.get('#Linkedin').type('QA');
        cy.get('.form-group > .btn').should('be.visible');
        cy.iframe('#bio-21585502_ifr').find("p").type("Lorem ipsum").should('be.visible');
        cy.get('.col-xs-12 > .btn').click()
        cy.url().should('include', '/login')
        cy.get('[name="Email"]').should('be.visible').type('ikolosov+ios@fliplet.com');
        cy.get('[name="Password"]').should('be.visible').type('Kolos777!');
        cy.contains('Log in').click();
        cy.url().should('include', '/event-list');
    });
  
    it('User is not able to registrar a new account with all required fields empty', () => {
        cy.get('.col-xs-12 > .btn').click()
        cy.get('[data-field="First Name"] > :nth-child(2) > .text-danger').should('be.visible')
        cy.get('[data-field="Last Name"] > :nth-child(2) > .text-danger').should('be.visible')
        cy.get('[data-field="Email"] > :nth-child(2) > .text-danger').should('be.visible')
        cy.get('[data-field="Password"] > :nth-child(2) > .text-danger').should('be.visible')
        cy.get('.fl-toast-body').should('be.visible').should('contain', 'Please complete all required fields.');
        cy.url().should('not.include', '/login')
     });
  
    it('User is not able to registrar a new account with invalid email address', () => {
        cy.get('#First\\ Name').type('Web');
        cy.get('#Last\\ Name').type('Web');
        cy.get('#Email').type('ikolosov+web%fliplet.com');
        cy.get('#Password').type('Kolos777!');
        cy.get('#confirmPassword').should('be.visible').type('Kolos777!');
        cy.get('.col-xs-12 > .btn').click()
        cy.get('[data-field="Email"] > :nth-child(2) > .text-danger').should('be.visible').should('contain', 'The input is not a valid email address.')
        cy.url().should('not.include', '/login')
    });
  
    it('User is not able to registrar a new account with email address that already registered in system', () => {
        cy.get('#First\\ Name').type('iOS');
        cy.get('#Last\\ Name').type('iOS');
        cy.get('#Email').type('ikolosov+ios@fliplet.com');
        cy.get('#Password').type('Kolos777!');
        cy.get('#confirmPassword').should('be.visible').type('Kolos777!');
        cy.get('#Telephone').type('777777777');
        cy.get('#Company').type('Fliplet');
        cy.get('#Title').type('QA');
        cy.get('#Expertize').type('QA');
        cy.get('#Sectors').type('QA');
        cy.get('#Location').type('QA');
        cy.get('#Linkedin').type('QA');
        cy.get('.form-group > .btn').click({force: true}).selectFile('cypress/fixtures/test_image.jpg');
        cy.iframe('#bio-21585502_ifr').find("p").type("Lorem ipsum").should('be.visible');
        cy.get('.col-xs-12 > .btn').click()
        cy.get('.callout > p').should('be.visible').should('contain', 'Email already exists');
        cy.url().should('not.include', '/login');
    });
    
    it('should have a "Back" button', () => {
        cy.get("input[value='Back']").should('exist');
      });
    
      it('should navigate to the previous page when "Back" button is clicked', () => {
        cy.get("input[value='Back']").click();
        cy.url().should('include', '/login');
    });

});