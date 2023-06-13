import xpath from '@cypress/xpath';
import { locators } from '/cypress/support';
import move from '@4tw/cypress-drag-drop';
import commands from '/cypress/support/commands';

context('Dashboard', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
    cy.intercept('GET', '/api/v1/integration/global/all/').as('allDashboard');
  });

 it('Log in to Report Portal (Negative)', () => {
   cy.get(locators.login).type('invalid').should('have.value', 'invalid');
   cy.get(locators.password).type('fakepasw').should('have.value', 'fakepasw');
 });

  it('Log in to Report Portal', () => {
    cy.loginAs('superadmin', 'erebus');
    cy.get(locators.buttons.submit).clickAndWait();
    cy.get('div[id=app]')
      .find('aside')
      .should('be.visible');
  });

  it('Scroll to bottom', () => {
    cy.loginAs('superadmin', 'erebus');
    cy.get(locators.buttons.submit).clickAndWait();
    cy.xpath(locators.buttons.dashboardButton).click();
    cy.wait('@allDashboard').then((interception) => {
      const response = interception.response;
      expect(response.statusCode).to.equal(200);
    });
    cy.get('footer').scrollIntoView();
    cy.get('footer')
      .should('be.visible');
  });

  it('Drag and drop widget, and resize widget', () => {
    cy.loginAs('superadmin', 'erebus');
    cy.get(locators.buttons.submit).clickAndWait();
    cy.xpath(locators.buttons.dashboardButton).clickAndWait();
    cy.xpath(locators.dashboard.dashboardByName('CYPRESS DASHBOARD')).clickAndWait();
    cy.xpath(locators.dashboard.dashboardTitle('CYPRESS DASHBOARD'))
      .should('be.visible');
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('be.visible');
    //resize widget
    cy.log('resize widget');
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('have.attr', 'style')
    cy.xpath(locators.widget.widgetHandle).moveElement(150, 150);
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('have.attr', 'style')
      .and('contains', 'width: 783px; height: 647px;');
    cy.xpath(locators.widget.widgetHandle).moveElement(-150, -150);

    //move widget
    cy.log('move widget');
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('have.attr', 'style')
      .and('contains', 'width: 670px; height: 501px;');
    cy.xpath(locators.widget.widgetHeader('WIDGET_CY')).moveElement(150,10);
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('have.attr', 'style')
      .and('contains', 'transform: translate(123px, 10px);');
    cy.xpath(locators.widget.widgetHeader('WIDGET_CY')).moveElement(-150,10);
    cy.xpath(locators.widget.widgetBody('WIDGET_CY'))
      .should('have.attr', 'style')
      .and('contains', 'translate(10px, 10px);');
  });

});
