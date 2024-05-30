describe('Onboarding screen', () => {

    beforeEach(() => {
      Cypress.session.clearAllSavedSessions()
      // Load the Onboarding screen
      cy.visit('https://apps.fliplet.com/fliplet-dev-event-advanced-qr-code-qa-v-5');
    })
  
    it('TC-01: Page is displayed', () => {
        
      cy.contains('Skip').should('be.visible');
      cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
      cy.title().should('eq', 'Onboarding - [dev] Event - Advanced (QR code) QA v5');
        //cy.title().should("eq", "Onboarding - Event - Advanced cy")
    })
  
    it('TC-01 Skip Onboarding', () => {
      cy.contains('Skip').should('be.visible').click();
      cy.url().should('include', '/login')
      
    })
  
    it('TC-02: User can swipe through all slides and proceed to apps', () => {
      cy.contains('Skip').should('be.visible');
      cy.get('.swiper-slide-content').should('have.length', 6)
          
      const numberOfClicks = 5
  
      for (let i = 0; i < numberOfClicks; i++) {
        cy.get('.swiper-button-next').click()
      }
  
          cy.get('.swiper-button-prev').should('be.visible')
          cy.get(".btn").should('be.visible').click();
  
          cy.url().should('include', '/login');
  
        })
    
  
      })