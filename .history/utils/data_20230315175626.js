const chalk = require('chalk');
const alerts = require('cli-alerts');
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const logSymbols = require('log-symbols');
const args = process.argv.slice(2);



const social = `
${chalk.hex(`#fc5e03`).bold.inverse(` Portfolio: `)} ${chalk.dim(
  ` https://www.jason-suarez.com/`
)}
${chalk.hex(`#0a66c2`).bold.inverse(` Linkedin: `)}  ${chalk.dim(
  ` https://www.linkedin.com/in/jason-suarez/`
)}
${chalk.hex(`#6cc644`).bold.inverse(`Github: `)}    ${chalk.dim(
  ` https://github.com/All-Khwarizmi`
)} 
`;