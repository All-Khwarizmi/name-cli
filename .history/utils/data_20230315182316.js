const chalk = require('chalk');
const alerts = require('cli-alerts');
const pkgJSON = require('../package.json');
const meow = require('meow')
const helpText = `Run= `
const cli = meow(``)

const bio  = `
${chalk.hex(`#6e5494`).bold.inverse(' Jason Suárez ')}

${chalk.italic(
  "I'm a spanish teacher | Full-stack JavaScript developer | Entrepreneur. \nI create applications to make my student's learning journey smoother."
)}
`;

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

const ad = `Make sure to check my portfolio
`


module.exports = {
    bio, 
    social,
    ad
}