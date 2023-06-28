exports.config = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,

  specs: ['./features/**/*.feature'],
  maxInstances: 100,
  logLevel: 'silent',
  bail: 0,
  baseUrl: 'http://localhost:8080',
  waitforTimeout: 10000,

  connectionRetryTimeout: 3 * 60 * 1000,
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec'],
  jasmineOpts: {
    defaultTimeoutInterval: 60000,
  },
  services: [],
};
