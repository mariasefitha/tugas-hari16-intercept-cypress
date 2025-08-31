import LoginPage from '../pages/loginPages'

describe('OrangeHRM Login Test', () => {
  it('Login Successfully (with valid credentials)', () => {
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Tunggu request login (statusCode bisa 302 redirect atau 200)
    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('be.oneOf', [200, 302]);

    // Verifikasi berhasil masuk dashboard
    cy.url().should('include', '/dashboard/index');
    cy.contains('Dashboard').should('be.visible');
  });
});
