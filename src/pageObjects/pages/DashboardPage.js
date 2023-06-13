import { expect } from 'chai';
import { GetElementStatus, ElementClicker, Waiters, Actions } from '../../helpers';
import { Inputs } from '../components';
import { config } from '../../../configs/wdio.conf';

export default class DashboardPage {
  static sidebarLocator = '//*[contains(@class,"sidebar")]';
  static nameField = '//input[@placeholder="Enter dashboard name"]';
  static descriptionField = '//textarea[@placeholder="Enter dashboard description"]';
  static userIcon = '//div/img[contains(@class,"userBlock__avatar")]';
  static welcomeText = '//span[contains(text(), "login to your account")]';
  static logoutField = '//div[contains(text(), "Logout")]';

  static getDashboardByName = dashboard =>
    `//*[contains(@class,"dashboardTable")]//a[contains(text(), "${dashboard}")]`;

  static getButtonLocatorByDashboardName = (dashboard, button) =>
    `//a[contains(text(), "${dashboard}")]//following-sibling::div//*[contains(@class, "${button}")]`;

  static iconMap = {
    Shared: 'icon-check',
    Edit: 'icon-pencil',
    Delete: 'icon-delete',
  };

  static fieldMap = {
    Name: this.nameField,
    Description: this.descriptionField,
  };

  static async checkVisibilityOfSideBar(isPresent) {
    const status = await GetElementStatus.statusOfElementIsDisplayed(this.sidebarLocator);
    expect(status).to.equal(isPresent);
  }

  static async clickDashboardActionButton(dashboard, button) {
    const buttonLocator = this.getButtonLocatorByDashboardName(dashboard, this.iconMap[button]);
    await ElementClicker.click(buttonLocator);
  }

  static async checkVisibilityOfDashboard(dashboard, isPresent) {
    const status = await GetElementStatus.statusOfElementIsDisplayed(this.getDashboardByName(dashboard));
    expect(status).to.equal(isPresent);
  }

  static async checkVisibilityOfDashboardIcon(dashboard, icon, isPresent) {
    const iconLocator = this.getButtonLocatorByDashboardName(dashboard,
      this.iconMap[icon]);
    await Waiters.waitUntilElementWillDisplay(this.getDashboardByName(dashboard));
    const status = await GetElementStatus.statusOfElementIsDisplayed(iconLocator);
    expect(status).to.equal(isPresent);
  }

  static async clearFieldValue(field) {
    await Inputs.clearTextField(this.fieldMap[field]);
  }

  static async logOut(waitMainContent = true) {
    await Waiters.waitElementIsDisplayed(this.userIcon);
    await Actions.hoverOverElement(this.userIcon);
    await ElementClicker.click(this.userIcon);
    await Waiters.waitElementIsDisplayed(this.logoutField, config.timeouts.default);
    await ElementClicker.click(this.logoutField);
    if (waitMainContent) {
      await Waiters.waitElementIsDisplayed(this.welcomeText, config.timeouts.short);
    }
  }
}
