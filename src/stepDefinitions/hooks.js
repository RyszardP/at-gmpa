import { After, Before, AfterAll } from '@wdio/cucumber-framework';
import { DashboardPage } from '../pageObjects/pages';
import { BrowserNavigation } from '../helpers';
import { initUrl } from '../../configs/modeConfiguration';
const { reportToSlack } = require('./../../configs/integration.hook');

Before(async () => {
  await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
  const message = 'api scenario start';
  await reportToSlack(message);
});

After(async () => {
  await BrowserNavigation.refresh();
  await DashboardPage.logOut();
  const message = 'api scenario end';
  await reportToSlack(message);
});

AfterAll(async () => {
  console.warn('close browser');
  await BrowserNavigation.closeWindow();
  const message = 'Test completed  passed :white_check_mark:';

  await reportToSlack(message);
});
