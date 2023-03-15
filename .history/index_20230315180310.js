#!/usr/bin/env node
const chalk = require('chalk');
const alerts = require('cli-alerts')
const init = require("./utils/init")
const data = require('./utils/data')
const log  = console.log
(async () => {
 init()

 log

})()



//log(alerts({ type: 'info', msg: args }));

