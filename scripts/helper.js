/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');
const { versions } = require('process')

function warning(msg) {
  if (!msg) return;

  console.log(chalk.yellow(`Warning⚠️ : ${msg}`));
}

function errorLog(msg) {
  if (!msg) return;

  console.log(chalk.red(`Error❌: ${msg}`));
}

function successLog(msg) {
  if (!msg) return;

  console.log(chalk.green(`Success🏖: ${msg}`));
}

function convertFirstLetterUpper(str = '') {
  if (!str || typeof str !== 'string') return;

  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isAvailableVersion(version) {
  if (versions.node < version) {
    warning(`The node.js version can not less than v${version}!`)
    return false;
  }

  return true;
}

module.exports = {
  warning,
  errorLog,
  successLog,
  convertFirstLetterUpper,
  isAvailableVersion,
}