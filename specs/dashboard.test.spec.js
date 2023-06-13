import { BrowserNavigation, ElementClicker } from '../src/helpers';
import { initUrl } from '../configs/modeConfiguration';
import { BaseDashboardModalWindow, BasePages, LogInPage } from '../src/pageObjects/pages/index.js';
import newDashboardData from '../src/utils/data/FieldValueData.js';

describe('(Negative) Create new dashboard', () => {
  const newDashboardFieldValues = newDashboardData.newDashboard[0];

  Object.values(newDashboardFieldValues).forEach((nameField, descriptionField) => {
    it('Create new dashboard with invalid values', async () => {
      await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
      await LogInPage.logIn(initUrl.rp_ui.user, initUrl.rp_ui.password);
      await ElementClicker.click(BasePages.dashboardButton);
      await browser.pause(2000); // eslint-disable-line
      await BasePages.clickOnButtonByName('Add New Dashboard');
      await BaseDashboardModalWindow.createNewDashboard(nameField, descriptionField);
      await BaseDashboardModalWindow.clickOnModalWindowButton('Add');
      const errorLocator = $(BaseDashboardModalWindow.fieldErrorLocator);
      await expect(errorLocator).toExist();
    });
  });
});
