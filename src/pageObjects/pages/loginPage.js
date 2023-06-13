import { ElementClicker, Waiters } from '../../helpers';
import { Inputs } from '../components';
import { config } from '../../../configs/wdio.conf';

class LogInPage {
  static userName = '[name="login"]';
  static passwordField = '[name="password"]';
  static logInButton = 'button[type="submit"]';
  static mainContentLocator = '//*[contains(@class,"sidebar")]';
  static loginErrorLocator = '//div[contains(@class,"login-field")]//*[contains(@class,"field-error-hint")]';

  static async logIn(userEmail, userPassword, waitMainContent = true) {
    await Inputs.setValueToElement(this.userName, userEmail);
    await Inputs.setValueToElement(this.passwordField, userPassword);
    await ElementClicker.click(this.logInButton);
    if (waitMainContent) {
      await Waiters.waitElementIsDisplayed(this.mainContentLocator, config.timeouts.short);
    }
  }
}

export default LogInPage;
