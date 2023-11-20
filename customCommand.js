Cypress.Commands.add('visitWithCheck', (url, checkSelector) => {
    cy.visit(url);
    cy.get(checkSelector).should('be.visible'); // Example check
});