import { Given, Then, When } from '@wdio/cucumber-framework';
import { BasePages } from '../pageObjects/pages';

Given(/^Hover on "([^"]*)" button in side menu$/, async buttonName => {
  await BasePages.hoverOnButtonByName(buttonName);
});

Then(/^Check "([^"]*)" popup is (not )?present$/, async (popupName, present) => {
  await BasePages.checkPopupVisibilityByName(popupName, !present);
});

Then(/^Check "([^"]*)" is (not )?present$/, async (popupName, present) => {
  await BasePages.checkVisibilityByName(popupName, !present);
});

Then(/^Check "([^"]*)" button is (not )?present$/, async (popupName, present) => {
  await BasePages.checkButtonVisibilityByName(popupName, !present);
});

When(/^Click on "([^"]*)" button$/, async button => {
  await BasePages.clickOnButtonByName(button);
});
