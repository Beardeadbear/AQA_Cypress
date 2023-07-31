describe('Registration', () => {
    it('Page displaying', () =>{
        cy.visit('https://apps.fliplet.com/fliplet-event-advanced-cy-0-lqhcbnr/account-registration-t4fq');
        cy.get('span.fl-widget-instance > .btn').should('be.visible');
        cy.get('h1').should('have.text', 'Account Registration');
        cy.get('#First\\ Name').should('be.visible');
        cy.get('#Last\\ Name').should('be.visible');
        cy.get('#Email').should('be.visible');
        cy.get('#Password').should('be.visible');
        cy.get('#confirmPassword').should('be.visible');
        cy.get(':nth-child(2) > .control-label').should('be.visible');
        cy.get('#Telephone').should('be.visible');
        cy.get('#Company').should('be.visible');
        cy.get('#Title').should('be.visible');
        cy.get('#Expertize').should('be.visible');
        cy.get('#Multiple\\ line\\ input').type('test{enter}').type('new test');
        //cy.get('[data-field="Bio"] > :nth-child(2)').should('be.visible').type('test');
        cy.iframe("#bio-16854737_ifr").find("p").type("Lorem ipsum{enter}").should('be.visible');
        

    });

})