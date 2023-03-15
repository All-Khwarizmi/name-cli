#!/usr/bin/env node

const alerts = require('cli-alerts');
const init = require('./utils/init');
const data = require('./utils/data');
const cli = require("./utils/cli");
const debug = require("./utils/debug");


(() => {
  init();
  cli.input.includes('help') && cli
  if (cli.flags.social) {
    console.log(data.bio);
  }
  console.log(data.social);
  if (cli.flags.ad) {
    
    alerts({ type: 'info', msg: data.ad });
  }
  // Debug tool if needed
    debug(cli.flags.debug)
  
})();

//log(alerts({ type: 'info', msg: args }));
