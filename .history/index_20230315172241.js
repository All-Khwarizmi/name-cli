#!/usr/bin/env node
const chalk = require('chalk');
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const logSymbols = require('log-symbols')
const args = process.argv.slice(2)
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
log(`
${chalk.hex(`#6e5494`).bold.inverse(' Jason Suárez ')}

${chalk.italic(
  "I'm a spanish teacher | Full-stack JavaScript developer | Entrepreneur. \nI create applications to make my student's learning journey smoother."
)}

${chalk.hex(`#fc5e03`).bold.inverse(` Portfolio: `)} ${chalk.dim(
  ` https://www.jason-suarez.com/`
)}
${chalk.hex(`#0a66c2`).bold.inverse(` Linkedin: `)}  ${chalk.dim(
  ` https://www.linkedin.com/in/jason-suarez/`
)}
${chalk.hex(`#6cc644`).bold.inverse(`Github: `)}    ${chalk.dim(
  ` https://github.com/All-Khwarizmi`
)}

`);
log(logSymbols.success, `Well done`)


