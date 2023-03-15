const welcome = require('cli-welcome');
const pkgJSON = require('../package.json);

const init = () => {
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
}


module.exports = init