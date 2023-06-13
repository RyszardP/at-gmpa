import { BrowserNavigation } from '../helpers';
import { DashboardPage } from '../pageObjects/pages';
import { initUrl } from '../../configs/modeConfiguration';

export default class Hook {
  static async openPage() {
    await BrowserNavigation.url(initUrl.rp_ui.baseUrl);
  }

  static async logoutFromRP() {
    await BrowserNavigation.refresh();
    await DashboardPage.logOut();
  }
}
