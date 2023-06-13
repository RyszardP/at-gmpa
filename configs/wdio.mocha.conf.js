import { argv } from 'yargs';
import { BrowserNavigation } from '../src/helpers';
import { initUrl } from './modeConfiguration';
import { existsSync, mkdirSync } from 'fs';

const allure = require('allure-commandline');

export const config = {
  baseUrl: initUrl.rp_ui.baseUrl,
  specs: ['./specs/**/*.spec.js'],
  capabilities: [
    {
      maxInstances: argv['max-threads'] || 2,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: ['--start-maximized'],
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
  framework: 'mocha',
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
  services: ['chromedriver'],

  async onPrepare() {},

  async beforeSession() {},

  async beforeScenario() {},

  beforeStep(step) {
    console.warn(`${step.keyword} ${step.text}`);
  },

  async afterStep(step, scenario, { error }) {
    if (error) {
      browser.takeScreenshot();
    }
  },

  async after() {
    console.warn('close browser');
    await BrowserNavigation.closeWindow();
  },
  afterTest: async (test, context, { error }) => {
    if (error) {
      const fileName = test.title + '.png';
      const dirPath = 'report/screenshots/';

      if (!existsSync(dirPath)) {
        mkdirSync(dirPath, {
          recursive: true,
        });
      }

      await browser.saveScreenshot(dirPath + fileName);
    }
  },

  onComplete: async () => {
    const generation = allure(['generate', 'allure-results', '--clean']);

    return await new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject('Could not generate Allure report'), 5000);

      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject('Could not generate Allure report');
        }

        console.log('Allure report successfully generated');

        resolve();
      });
    });
  },
};
