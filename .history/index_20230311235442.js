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
${chalk.bgGreen.bold(' Jason Suárez ')}

${chalk.italic(
  "Spanish teacher | Full-stack JavaScript developer | Entrepreneur \nI create applications to make my student's learning journey smoother."
)}

👀 ${chalk.hex(`#fc5e03`).bold.inverse(` Portfolio: `)} ${chalk.dim(
  ` https://www.jason-suarez.com/`
)}
🐈 ${chalk.hex(`#6e5494`).bold.inverse(` Github: `)}    ${chalk.dim(
  ` https://github.com/All-Khwarizmi`
)}
😎 ${chalk.hex(`#0a66c2`).bold.inverse(` Linkedin: `)}  ${chalk.dim(
  ` https://www.linkedin.com/in/jason-suarez/`
)}

`);
