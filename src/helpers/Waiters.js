import { ErrorWrapper } from '../utils/index.js';
import { config } from '../../configs/wdio.conf.js';

export default class Waiters {
  /**
   * Wait for an element for the provided amount of milliseconds to be displayed.
   * See https://webdriver.io/docs/api/element/waitForDisplayed/
   * @param elementLocator - Locator of element.
   * @param timeout - Timout fot locator. If timout is not set in function standard parameter will be used.
   */
  static async waitElementIsDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitElementIsNotDisplayed(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForDisplayed({ timeout, reverse: true });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitElementIsExist(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForExist({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitElementIsEnabled(elementLocator, timeout = config.timeouts.default) {
    const element = await $(elementLocator);
    try {
      await element.waitForEnabled({ timeout });
    } catch (e) {
      throw ErrorWrapper.elementError(e, element);
    }
  }

  static async waitUntilElementWillDisplay(elementLocator) {
    const element = await $(elementLocator);
    await browser.waitUntil(async () => await element.isDisplayed(), {
      timeout: config.timeouts.default,
      timeoutMsg: `Element with selector: ${element.selector} still not displayed`,
    });
  }

  static async waitAngularStability(timeout) {
    await browser.waitUntil(
      async () => {
        const stable = await browser.execute(
          'return window.getAllAngularTestabilities().findIndex(x=>!x.isStable()) === -1',
        );
        return stable === true;
      },
      {
        timeout: timeout ? config.timeouts[timeout] : config.timeouts.default,
        timeoutMsg: 'Angular is not stable',
      },
    );
  }
}
