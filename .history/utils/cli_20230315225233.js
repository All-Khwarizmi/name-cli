const meow = require('meow');

const helpText = `

Usage
    npx swre [options]

Options
    social       Show the social info
    --no-social  Don't show the social info
    ad           Show the ad info
    --no-ad      Don't show the ad info
    help         Show the debug info
    --no-ad      Don't show the ad info
    debug        Show the debug info
    --no-ad      Don't show the ad info

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
  },
};
module.exports = meow(helpText, options);
