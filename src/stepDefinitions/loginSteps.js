import { initUrl } from '../../configs/modeConfiguration';
import { BrowserNavigation } from '../helpers';
import { Given } from '@wdio/cucumber-framework';
import { LogInPage } from '../pageObjects/pages';

Given(/^Open Report Portal$/, async () => {
  await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
});

Given(/^Log in to RP$/, async () => {
  await LogInPage.logIn(initUrl.rp_ui.user, initUrl.rp_ui.password);
});

Given(/^Open "([^"]*)" page$/, async page => {
  const pageMap = {
    'All Dashboards': 'dashboard',
  };
  const url = `${initUrl.rp_ui.baseUrl}/ui/${initUrl.rp_ui.user}_personal/${pageMap[page]}`;
  console.warn(`URL: ${url}`);
  await BrowserNavigation.url(url);
});

Given(/^Refresh page$/, async () => {
  await BrowserNavigation.refresh();
});
