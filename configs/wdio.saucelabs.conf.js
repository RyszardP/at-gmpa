const { config } = require('./wdio.shared.conf');

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
      tunnelIdentifier: process.env.SAUCE_TUNNEL_IDENTIFIER,
      build: `WebdriverIO Sauce Connect build-${new Date().getTime()}`,
    },
  },
];

exports.config = config;
