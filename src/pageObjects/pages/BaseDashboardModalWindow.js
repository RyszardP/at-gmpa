import { expect } from 'chai';
import { ElementClicker, GetElementStatus, Waiters } from '../../helpers/index.js';
import { Inputs } from '../../pageObjects/components/index.js';

export default class BaseDashboardModalWindow {
  static modalPopUp = '//div[contains(@class, "modal-window")]';
  static cancelButton = '//button[contains(text(), "Cancel")]';
  static addButton = '//button[contains(text(), "Add")]';
  static crossButton = '//div[contains(@class, "close-modal-icon")]';
  static updateButton = '//button[contains(text(), "Update")]';
  static nameField = '//input[@placeholder="Enter dashboard name"]';
  static descriptionField = '//textarea[@placeholder="Enter dashboard description"]';
  static addNewDashboardModalTitle = '//span[contains(text(), "Add New Dashboard")]';
  static editDashboardModalTitle = '//span[contains(text(), "Edit Dashboard")]';
  static fieldErrorLocator = '//div[contains(@class,"modal-field")]//*[contains(@class,"field-error-hint")]';
  static shareToggle = '//label[contains(@class, "inputBigSwitcher")]';
  static enabledShareToggle = '//div[contains(@class, "turned-on")]';

  static titleMap = {
    'Add New Dashboard': this.addNewDashboardModalTitle,
    'Edit Dashboard': this.editDashboardModalTitle,
  };

  static fieldFormMap = {
    Name: 'setValueToField',
    Description: 'setValueToField',
  };

  static modalWindowButtonMap = {
    Cancel: this.cancelButton,
    Add: this.addButton,
    Cross: this.crossButton,
    Update: this.updateButton,
  };

  static async checkTitleText(title, isPresent) {
    await Waiters.waitElementIsDisplayed(this.titleMap[title]);

    expect(await GetElementStatus.statusOfElementIsDisplayed(this.titleMap[title])).to.equal(isPresent);
  }

  static async checkModalWindowPresence(isPresent = true) {
    const status = await GetElementStatus.statusOfElementIsDisplayed(this.modalPopUp);
    expect(status).to.equal(isPresent);
  }

  static async checkModalButtonVisibility(button, isPresent) {
    const buttonLocator = this.modalWindowButtonMap[button];
    const status = await GetElementStatus.statusOfElementIsDisplayed(buttonLocator);
    expect(status).to.equal(isPresent);
  }

  static getFieldValue(value, fieldName) {
    return this[this.fieldFormMap[fieldName]](value);
  }

  static async setValueToField(value, fieldName) {
    const locatorsByFieldMap = {
      Name: this.nameField,
      Description: this.descriptionField,
    };
    const fieldLocator = locatorsByFieldMap[fieldName];
    await Waiters.waitElementIsDisplayed(fieldLocator);
    await Inputs.setValueToElement(fieldLocator, value);
  }

  static async clickOnModalWindowButton(button) {
    await Waiters.waitElementIsDisplayed(this.modalWindowButtonMap[button]);
    await ElementClicker.click(this.modalWindowButtonMap[button]);
  }

  static async createNewDashboard(nameField, descriptionField) {
    await Inputs.setValueToElement(this.nameField, nameField);
    await Inputs.setValueToElement(this.descriptionField, descriptionField);
  }

  static async checkInputError(isPresent) {
    const status = await GetElementStatus.statusOfElementIsDisplayed(this.fieldErrorLocator);
    expect(status).to.equal(isPresent);
  }

  static async clickOnShareToggle() {
    await ElementClicker.click(this.shareToggle);
  }

  static async checkToggleEnabled(enabled) {
    const status = await GetElementStatus.statusOfElementIsDisplayed(this.enabledShareToggle);
    expect(status).to.equal(enabled);
  }
}
