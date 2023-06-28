const { config } = require('./wdio.shared.conf');
const defaultBrowserSauceOptions = {
  build: `WebdriverIO Sauce Connect build-${new Date().getTime()}`,
  screenResolution: '1600x1200',
};

config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = 'eu';

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
    'sauce:options': {
      ...defaultBrowserSauceOptions,
    },
  },
];

exports.config = config;
