const alerts = require('cli-alerts');
const cli = require('./cli');

module.exports = (flag) => {
    if (!flag) return
  alerts({ type: 'warning', msg: `DEBUGGING INFO` });
  console.log('Cli', cli.input);
  console.log('Cli.input', cli.input);
  console.log('Cli.flags', cli.flags);
};
