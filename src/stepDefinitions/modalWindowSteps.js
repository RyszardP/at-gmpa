import { Then, When } from '@wdio/cucumber-framework';
import { BaseDashboardModalWindow } from '../pageObjects/pages';

Then(/^Check that title "([^"]*)" is (present|absent) on modal window$/, async (title, isPresent) => {
  const titleValue = title.replace(/'/g, '"');
  await BaseDashboardModalWindow.checkTitleText(titleValue, isPresent === 'present');
});

Then(/^Check modal window is (present|absent)$/, async modalWindowStatus => {
  await BaseDashboardModalWindow.checkModalWindowPresence(modalWindowStatus === 'present');
});

Then(/^Check that "([^"]*)" button is (present|absent) on modal window$/, async (button, isPresent) => {
  await BaseDashboardModalWindow.checkModalButtonVisibility(button, isPresent === 'present');
});

When(/^Select value "([^"]*)" in "([^"]*)" field on modal window$/, async (value, fieldName) => {
  await BaseDashboardModalWindow.setValueToField(value, fieldName);
});

When(/^Click on "([^"]*)" button on modal window$/, async button => {
  await BaseDashboardModalWindow.clickOnModalWindowButton(button);
});

Then(/^Check that field error is (present|absent) on modal window$/, async isPresent => {
  await BaseDashboardModalWindow.checkInputError(isPresent === 'present');
});

When(/^Click Share toggle$/, async () => {
  await BaseDashboardModalWindow.clickOnShareToggle();
});

Then(/^Check that Share toggle is (enabled|disabled)$/, async isEnabled => {
  await BaseDashboardModalWindow.checkToggleEnabled(isEnabled === 'enabled');
});
