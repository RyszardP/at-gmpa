import { BrowserNavigation } from '../src/helpers/index.js';
import { initUrl } from '../configs/modeConfiguration';
import { LogInPage, BasePages } from '../src/pageObjects/pages/index.js';


describe('Open and log in to Report Portal', () => {
  it('Log in To Report Portal', async () => {
    await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
    await LogInPage.logIn(initUrl.rp_ui.user, initUrl.rp_ui.password);
    const sidebarLocator = $(BasePages.sidebarLocator);
    await expect(sidebarLocator).toExist();
  });
});
