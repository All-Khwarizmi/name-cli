const meow = require('meow');

const helpText = `

Usage
    npx swre [options]

Options
    social       Show the social info
    --no-social  Don't show the social info
    ad           Show the ad info
    --no-ad      Don't show the ad info
    help         Show the help info
    swre help    
    debug       
    --debug -d   Show the debug info
    version       
    --debug -d   Show the debug info

Examples
    npx swre --no-social
`;
const options = {
  flags: {
    social: {
      type: 'boolean',
      default: true,
    },
    ad: {
      type: 'boolean',
      default: true,
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd',
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v',
    },
  },
};
module.exports = meow(helpText, options);
