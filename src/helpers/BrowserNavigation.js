class BrowserNavigation {
  /**
   * https://w3c.github.io/webdriver/#dfn-close-window
   */
  static async closeWindow() {
    await browser.closeWindow();
  }

  /**
   * https://w3c.github.io/webdriver/#dfn-refresh
   */
  static async refresh() {
    await browser.refresh();
  }

  /**
   * https://webdriver.io/docs/api/browser/url/
   */
  static async url(path) {
    await browser.url(path);
  }
}

export default BrowserNavigation;
