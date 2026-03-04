// cypress/e2e/02_auth.cy.js

describe('Authentication Flow', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/');
  });

  it('should login with valid credentials and show dashboard sections', () => {
    // Click the Login button on the home page
    cy.contains('Login').click();

    // Verify we are on the login page
    cy.url().should('include', '/login');

    // Fill the login form with valid credentials
    cy.get('input[name="username"]').type('Omanaite');
    cy.get('input[name="password"]').type('palermo5590');
    cy.get('button[type="submit"]').click();

    // After successful login, we should be back at the root URL
    cy.url().should('eq', Cypress.config().baseUrl + '/');

    // Verify that the main dashboard sections are visible
    cy.contains('new').should('be.visible');
    cy.contains('pending').should('be.visible');
    cy.contains('closed').should('be.visible');
    cy.contains('my polls').should('be.visible');
  });

  it('should show an error message with invalid credentials', () => {
    // Navigate to login page
    cy.contains('Login').click();
    cy.url().should('include', '/login');

    // Enter invalid credentials
    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    // Verify that an error message appears (adjust text if needed)
    cy.contains('Log in failed: account not found. Username or password incorrectly typed?').should('be.visible');
  });

  // Nota: La prueba de logout requiere saber cómo se activa el cierre de sesión.
  // Por ahora, la omitimos hasta que puedas indicarme dónde está el botón de logout.
});