var chalk = require('chalk')

export default {
  error: (arg) => chalk.bold.red(arg),
  warning: (arg) => chalk.keyword('orange'),
  success: (arg) => chalk.keyword('green'),
  info: (arg) => chalk.keyword('blue')
}
