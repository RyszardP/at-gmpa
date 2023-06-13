import { GetData } from '../../helpers/index.js';
import { ErrorWrapper } from '../../utils/index.js';

export default class Inputs {
  static async setValueToElement(elementLocator, value) {
    const element = await GetData.getElement(elementLocator);
    await element.setValue(value);
  }

  static async clearTextField(fieldLocator) {
    try {
      const element = await GetData.getElement(fieldLocator);
      await element.clearValue();
    } catch (e) {
      throw ErrorWrapper.elementError(e, fieldLocator);
    }
  }
}
