import { argv } from 'yargs';

export const initUrl = {
  rp_ui: {
    baseUrl: argv.appurl,
    user: argv.usr,
    password: argv.password,
  },
  api_ver: {
    apiVer: argv.apiver,
  },
};
