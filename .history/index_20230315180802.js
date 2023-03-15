#!/usr/bin/env node

const alerts = require('cli-alerts')
const init = require("./utils/init")
const data = require('./utils/data')
const log  = console.log

(async () => {
 init()

 console.log(data.bio)
 console.log(data.social)
 alerts({type: 'info', msg: data.ad})

})()



//log(alerts({ type: 'info', msg: args }));

