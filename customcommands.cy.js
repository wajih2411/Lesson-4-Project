Cypress.Commands.add('visitAndLogin', (url, action, options = {}) => {
    cy.visit(url);

    switch(action) {
        case 'login':
            cy.get(options.usernameSelector).type(options.username);
            cy.get(options.passwordSelector).type(options.password);
            cy.get(options.submitButtonSelector).click();
            break;
    }
});

describe('Custom Visit and Interact Command Test', () => {
    it('should log in successfully - saucelabs', () => {
        cy.visitAndLogin('https://www.saucedemo.com/', 'login', {
            usernameSelector: '#user-name',
            username: 'standard_user',
            passwordSelector: '#password',
            password: 'secret_sauce',
            submitButtonSelector: '#login-button'
        });
    });
    it('should log in successfully - practice test automation', () => {
        cy.visitAndLogin('https://practicetestautomation.com/practice-test-login/', 'login', {
            usernameSelector: '#username',
            username: 'student',
            passwordSelector: '#password',
            password: 'Password123',
            submitButtonSelector: '#submit.btn'
        });
    });
});