import { Actions, GetElementStatus, Waiters, ElementClicker } from '../../helpers';
import { expect } from 'chai';

export default class BasePages {
  static sideBarElementButton = element => `//*[contains(@class, "sidebarButton")]//a[contains(@href, "${element}")]`;
  static getPopupLocator = fieldName => `//*[contains(@class, "tooltip")]/div[text()="${fieldName}"]`;

  static dashboardPopup = '//*[contains(@class, "tooltip")]/div[text()="Dashboards"]';
  static launchesPopup = '//*[contains(@class, "tooltip")]/div[text()="Launches"]';
  static addNewDashboardButton = '//button//span[contains(text(), "Add New Dashboard")]';
  static dashboardButton = '//*[contains(@class, "sidebarButton")]//a[contains(@href, "dashboard")]';
  static sidebarLocator = '//*[contains(@class, "layout__sidebar-container")]';
  static deleteButton = '//button[contains(text(), "Delete")]';

  static popupLocatorsMap = {
    Dashboards: this.dashboardPopup,
    Launches: this.dashboardPopup,
  };

  static buttonLocatorsMap = {
    Delete: this.deleteButton,
    dashboard: this.dashboardButton,
    'Add New Dashboard': this.addNewDashboardButton,
  };

  static elementsLocatorsMap = {
    sidebar: this.sidebarLocator,
  };

  static async hoverOnButtonByName(buttonName) {
    await Waiters.waitElementIsDisplayed(this.sideBarElementButton(buttonName));
    await Actions.hoverOverElement(this.sideBarElementButton(buttonName));
  }

  static async checkPopupVisibilityByName(popupName, present) {
    const popupLocator = this.getPopupLocator(popupName);
    const status = await GetElementStatus.statusOfElementIsDisplayed(popupLocator);
    expect(status).to.equal(present);
  }

  static async checkVisibilityByName(element, present) {
    const elementLocator = this.elementsLocatorsMap[element];
    const status = await GetElementStatus.statusOfElementIsDisplayed(elementLocator);
    expect(status).to.equal(present);
  }

  static async checkButtonVisibilityByName(buttonName, isPresent) {
    const buttonLocator = this.buttonLocatorsMap[buttonName];
    const status = await GetElementStatus.statusOfElementIsDisplayed(buttonLocator);
    expect(status).to.equal(isPresent);
  }

  static async clickOnButtonByName(name) {
    await Waiters.waitElementIsEnabled(this.buttonLocatorsMap[name]);
    await ElementClicker.click(this.buttonLocatorsMap[name]);
  }
}
