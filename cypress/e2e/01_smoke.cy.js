// cypress/e2e/01_smoke.cy.js

describe('Smoke Test - App Loads Correctly', () => {
  it('should navigate from home to login and verify form', () => {
    // 1. Visit the home page (root)
    cy.visit('/');

    // 2. Verify we are on the home page (look for a unique element, e.g., a title or button)
    //    ¡Reemplaza 'Get Started' con el texto exacto de tu botón!
    cy.contains('Login').should('be.visible');

    // 3. Click the button that leads to login
    cy.contains('Login').click();

    // 4. Now we should be on the login page. Check the URL or a unique element.
    //    Based on your project structure, the login page might be at '/login'
    cy.url().should('include', '/login');

    // 5. Finally, verify the login form elements are present
    cy.get('input[name="username"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});