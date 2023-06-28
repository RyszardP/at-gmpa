const { config } = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
  build: `WebdriverIO Sauce Connect build-${new Date().getTime()}`,
};

// ============================================
// Add the Sauce Service, see
// https://webdriver.io/docs/sauce-service.html
// for more details
// ============================================
config.services = config.services.concat([
  [
    'sauce',
    {
      sauceConnect: true,
    },
  ],
]);

config.capabilities = [
  {
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    region: 'eu',
    'sauce:options': {
      name: 'atgmpa',
      tunnelIdentifier: null,
      ...defaultBrowserSauceOptions,
    },
  },
];

exports.config = config;
