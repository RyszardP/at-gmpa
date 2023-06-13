import { locators } from '/cypress/support';

Cypress.Commands.add('moveElement', { prevSubject: true }, (subject, deltaX, deltaY) => {
  cy.wrap(subject).trigger('mousedown', { which: 1, clientX: 0, clientY: 0 })
    .trigger('mousemove', { clientX: deltaX, clientY: deltaY })
    .trigger('mouseup', { force: true }).wait(500);
});

Cypress.Commands.add('clickAndWait', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).click().wait(500);
});

Cypress.Commands.add('loginAs', (username, password) => {
  cy.get(locators.login)
    .type(username)
    .should('have.value', username);
  cy.get(locators.password)
    .type(password)
    .should('have.value', password);
});
