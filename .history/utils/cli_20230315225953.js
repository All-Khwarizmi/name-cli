const meow = require('meow');
const {green, yellow, cyan} = require('chalk')

const helpText = `

    Usage
        $ [--options] <commands>

    Options
        social       Show the social info
        --no-social  Don't show the social info
        ad           Show the ad info
        --no-ad      Don't show the ad info      
        --debug -d   Show the debug info     
        --version -v   Show the package version 

    Commands 
        help        Print CLI help information

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
