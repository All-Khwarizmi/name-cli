#!/usr/bin/env node
const chalk = require('chalk');
const alerts = require('cli-alerts')
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const logSymbols = require('log-symbols')
const args = process.argv.slice(2)


 
const printSocial = args.indexOf("--no-social") === -1
const social = printSocial ? socialInfo : ""
welcome({
  title: pkgJSON.name,
  tagLine: 'Get to know Jason',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#6e5494`,
  color: `#000000`,
  bold: true,
  clear: true,
});
const log = console.log;




`);

log(social)

//log(alerts({ type: 'info', msg: args }));

