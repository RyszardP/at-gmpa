import { argv } from 'yargs';
import { initUrl } from './modeConfiguration';

export const config = {
  baseUrl: initUrl.rp_ui.baseUrl,
  specs: ['./features/**/*.feature'],
  capabilities: [
    {
      browserName: 'chrome',
      platformName: 'Windows 10',
      browserVersion: 'latest',
      maxInstances: 1,
      'sauce:options': {
        build: 'build-atgmpa',
        name: 'atgmpa',
      },
      'goog:chromeOptions': {
        args: ['--force-dark-mode=true'],
      },
    },
  ],
  timeouts: {
    short: 5000,
    default: 12000,
    standard: 30000,
    long: 60000,
  },
  waitforTimeout: 10000,
  connectionRetryCount: 3,
  logLevel: 'error',
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./src/stepDefinitions/**/*.js'],
    backtrace: false,
    requireModule: ['@babel/register'],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: `(${argv.tag}) and (not @forReview)`,
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'report',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  services: ['sauce'],
  //  sauceConnect: true,
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  region: 'eu',

  beforeStep(step) {
    console.warn(`${step.keyword} ${step.text}`);
  },

  async afterStep(step, scenario, { error }) {
    if (error) {
      await browser.takeScreenshot();
    }
  },
};


