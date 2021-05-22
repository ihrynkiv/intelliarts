const chalk = require('chalk');

const errorMsg = chalk.bold.red;
const successMsg = chalk.bold.hex('#99ffff');
const warningMsg = chalk.bold.bgYellow.hex('#000');

const primaryColorMsg = chalk.hex('#f9ed69');
const secondaryColorMsg = chalk.hex('#f08a5d');

module.exports = {
  errorMsg,
  successMsg,
  primaryColorMsg,
  secondaryColorMsg,
  warningMsg,
};
