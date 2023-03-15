#!/usr/bin/env node

const alerts = require('cli-alerts');
const init = require('./utils/init');
const data = require('./utils/data');
const cli = require("./utils/cli");
const debug = require("./utils/debug")


(() => {
  init();

  if (cli.flags.social) {
    console.log(data.bio);
  }
  console.log(data.social);
  if (cli.flags.ad) {
    
    alerts({ type: 'info', msg: data.ad });
  }
  
})();

//log(alerts({ type: 'info', msg: args }));
