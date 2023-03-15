#!/usr/bin/env node
const chalk = require('chalk');
const alerts = require('cli-alerts')
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const logSymbols = require('log-symbols')
const args = process.argv.slice(2)


 
const printSocial = args.indexOf("--no-social") === -1
const social = printSocial ? socialInfo : ""

const log = console.log;


log(social)

//log(alerts({ type: 'info', msg: args }));

