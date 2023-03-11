#!/usr/bin/env node
const chalk = require('chalk');
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
welcome({
  title: pkgJSON.name,
  tagLine: 'Get to know Jason',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});
const log = console.log;
log(`
${chalk.blue('Jason Suárez')}

Spanish teacher | Full-stack JavaScript developer | Entrepreneur \nI create applications to make my student's learning journey smoother.

👀 Portfolio : https://www.jason-suarez.com/
🐈 Github :    https://github.com/All-Khwarizmi
😎 Linkedin :  https://www.linkedin.com/in/jason-suarez/

`);
