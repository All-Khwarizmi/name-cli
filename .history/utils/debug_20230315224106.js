const alerts = require('cli-alerts');
const cli = require('./cli');

module.exports = (fla) => {
  alerts({ type: 'warning', msg: `DEBUGGING INFO` });
  console.log('Cli.input', cli.input);
  console.log('Cli.flags', cli.flags);
};
