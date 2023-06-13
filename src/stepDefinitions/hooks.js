import { After, Before, AfterAll } from '@wdio/cucumber-framework';
import { DashboardPage } from '../pageObjects/pages';
import { BrowserNavigation } from '../helpers';
import { initUrl } from '../../configs/modeConfiguration';

Before(async () => {
  await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
});

After(async () => {
  await BrowserNavigation.refresh();
  await DashboardPage.logOut();
});

AfterAll(async () => {
  console.warn('close browser');
  await BrowserNavigation.closeWindow();
});
