import { ErrorWrapper } from '../utils/index.js';
import { GetData } from './../helpers/index.js';

class ElementClicker {
  static async click(selector, visible = true) {
    try {
      const element = await GetData.getElement(selector, visible);
      await element.click();
    } catch (error) {
      throw ErrorWrapper.elementError(error, selector);
    }
  }

  static async doubleClick(selector) {
    try {
      const element = await GetData.getElement(selector);
      await element.doubleClick();
    } catch (error) {
      throw ErrorWrapper.elementError(error, selector);
    }
  }
}

export default ElementClicker;
