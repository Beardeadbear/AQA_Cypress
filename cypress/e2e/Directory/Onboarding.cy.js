describe('Onboarding screen', () => {
    beforeEach(() => {
      cy.visit('/onboarding'); // Replace '/onboarding' with the actual URL of your onboarding screen
    });
  
    it('should allow the user to swipe through all slides and proceed to the app', () => {
      // Assuming there are multiple slides to swipe through
      cy.get('.slide').should('have.length.gt', 0); // Check if there are slides present
      cy.get('.slide').swipe('left'); // Swipe left to proceed to the next slide
      cy.get('.slide').should('not.exist'); // Check if the last slide is no longer present, indicating the user has proceeded to the app
    });
  
    it('should only ask the user to go through onboarding the first time the app is used', () => {
      // Perform the necessary actions to simulate the app being used for the first time
      // For example, clearing local storage, deleting cookies, or any other setup steps
  
      // Visit the onboarding screen
      cy.visit('/onboarding');
  
      // Perform your assertions to check if the user is asked to go through onboarding
      cy.get('.slide').should('have.length.gt', 0);
    });
  
    it('should allow the user to skip onboarding and proceed to the Login/Home screen', () => {
      cy.contains('Skip').click(); // Assuming there is a button with 'Skip' text to skip the onboarding
      cy.url().should('include', '/login'); // Assuming '/login' is the URL of the Login/Home screen
    });
  
    it('should have relevant and appropriate content for the use case', () => {
      cy.get('.slide').each(slide => {
        cy.wrap(slide).should('have.text', 'relevant content'); // Replace 'relevant content' with the expected content of the slide
        // Perform additional assertions as necessary to check for appropriate content
      });
    });
  });
  