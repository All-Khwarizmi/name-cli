#!/usr/bin/env node

const alerts = require('cli-alerts');
const init = require('./utils/init');
const data = require('./utils/data');
const meow = require('meow');

const helpText = `Run= npx swre`;
const options = {
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
  },
};
const cli = meow(helpText, options);
(() => {
  init();

  if (cli.flags.)
  console.log(data.social);
  alerts({ type: 'info', msg: data.ad });
  alerts({ type: 'info', msg: `CLI DATA` });
  console.log("Cli.input", cli.input)
  console.log("Cli.flags", cli.flags)
})();

//log(alerts({ type: 'info', msg: args }));
