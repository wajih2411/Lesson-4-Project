# Custom Cypress Command

This project enhances automated testing capabilities in Cypress by introducing a custom command.

## Repository Link

https://github.com/wajih2411/lesson-4-project

## How to Use

To utilize the visitAndInteract command in your Cypress tests, follow these steps:

1. Import the Command: Ensure customCommands.js is imported in your commands.js file in the Cypress support directory.

2. To perform a login action:

cy.visitAndInteract('http://example.com/login', 'login', {
    usernameSelector: '#username',
    username: 'yourUsername',
    passwordSelector: '#password',
    password: 'yourPassword',
    submitButtonSelector: '#loginButton'
});

## Contributors

- Wajih Muhammad