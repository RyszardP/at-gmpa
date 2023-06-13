import { ErrorWrapper } from '../utils/index.js';
import { GetData } from './../helpers/index.js';

export default class Actions {
  static async hoverOverElement(elementLocator) {
    try {
      const element = await GetData.getElement(elementLocator);
      await element.moveTo();
    } catch (e) {
      throw ErrorWrapper.elementError(e, elementLocator);
    }
  }
}
