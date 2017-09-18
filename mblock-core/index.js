var chalk = require('chalk')

module.exports = {
  error: (arg) => chalk.bold.red(args),
  warning: (arg) => chalk.keyword('orange'),
  success: (arg) => chalk.keyword('green'),
  info: (arg) => chalk.keyword('blue')
}
