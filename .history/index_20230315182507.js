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
const cli = meow(``)(() => {
  init();

  console.log(data.bio);
  console.log(data.social);
  alerts({ type: 'info', msg: data.ad });
  alerts()
})();

//log(alerts({ type: 'info', msg: args }));
