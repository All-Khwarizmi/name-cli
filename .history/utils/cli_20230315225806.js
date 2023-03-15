const meow = require('meow');

const helpText = `

    Usage
        npx swre [options] <commands>

    Options
        social       Show the social info
        --no-social  Don't show the social info
        ad           Show the ad info
        --no-ad      Don't show the ad info      
        --debug -d   Show the debug info     
        --version -v   Show the package version 
    
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
