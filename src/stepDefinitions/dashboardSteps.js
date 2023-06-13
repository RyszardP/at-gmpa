import { Given, When } from '@wdio/cucumber-framework';
import { DashboardPage } from '../pageObjects/pages';
import { BrowserNavigation } from '../helpers';
import { ScenarioContext } from '../utils';

Given(/^Check page is (present|absent) main sidebar$/, async isPresent => {
  await DashboardPage.checkVisibilityOfSideBar(isPresent === 'present');
});

When(/^Click for "([^"]*)" "([^"]*)" button on All Dashboards page$/, async (dashboard, button) => {
  await DashboardPage.clickDashboardActionButton(dashboard, button);
});

Given(/^Check that "([^"]*)" dashboard is (present|absent) on All Dashboards page$/, async (dashboard, isPresent) => {
  await DashboardPage.checkVisibilityOfDashboard(dashboard, isPresent === 'present');
});

Given(/^Check that New Created Dashboard is (present|absent) on All Dashboards page$/, async isPresent => {
  const dashboardNameFromContext = await ScenarioContext.getContextProperty('dashboard');
  await DashboardPage.checkVisibilityOfDashboard(dashboardNameFromContext.name, isPresent === 'present');
});

Given(/^Check that for "([^"]*)" dashboard "([^"]*)" icon is (present|absent) on All Dashboards page$/, async (dashboard, icon, isPresent) => {
  await DashboardPage.checkVisibilityOfDashboardIcon(dashboard, icon, isPresent === 'present');
});

When(/^Clear value in "([^"]*)" field$/, async field => {
  await DashboardPage.clearFieldValue(field);
});

When(/^Log out from RP$/, async () => {
  await BrowserNavigation.refresh();
  await DashboardPage.logOut();
});

