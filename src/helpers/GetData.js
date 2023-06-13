import { Waiters } from './../helpers/index.js';
import { ErrorWrapper } from '../utils/index.js';

export default class GetData {
  static async getElement(elementLocator, visible = true) {
    try {
      const element = await $(elementLocator);
      await Waiters.waitElementIsExist(elementLocator);
      await element.scrollIntoView({ block: 'center', inline: 'center' });
      if (visible) {
        await Waiters.waitElementIsDisplayed(elementLocator);
      }
      return element;
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }

  static async getTextFromElement(elementLocator) {
    try {
      const element = await this.getElement(elementLocator);
      return await element.getText();
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
}
