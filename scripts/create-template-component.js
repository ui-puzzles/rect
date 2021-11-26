#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const { Command } = require('commander');
const fs= require('fs');
const { mkdir, readdir, copyFile, rename } = require('fs/promises');
const { versions } = require('process')
const path = require('path');
const chalk = require('chalk');
const replaceInFile = require('replace-in-file');

const program = new Command();
const componentsDir = path.resolve(__dirname, '../src/components');
const templateDir = path.resolve(__dirname, './templates');
const templateRe = /^(__template__\.).*[mdx|tsx|]$/i;

program
  .command('create <componentName>')
  .description('create a template component quickly whit [componentName]')
  .action((componentName) => {
    createTempComponent(componentName);
  });

program.parse(process.argv);

async function createTempComponent(cName) {
  const formatName = convertFirstLetterUpper(cName);
  const newCompPath = path.join(componentsDir, formatName);
 
  // check the version of running node.js.
  if (!isAvailableVersion('10.10.0')) return;
  
  // check the path is existed
  if (fs.existsSync(newCompPath)) {
    warning(`The component named ${formatName} already exists!`);
    return;
  }

  try {
    await mkdir(newCompPath);
    // await cp(templateDir, newCompPath);
    const readTempDir = await readdir(templateDir);
    for await (const fileName of readTempDir) {
      const newFileName = fileName.replace(/(__template__)/i, `${cName}`);
      const newFilePath = `${newCompPath}/${newFileName}`;

      await copyFile(`${templateDir}/${fileName}`, `${newCompPath}/${fileName}`);
      // rename name of file
      if (templateRe.test(fileName)) {
        await rename(`${newCompPath}/${fileName}`, newFilePath);
      }
      // replace __Template__ with corresponding name
      await replaceInFile({
        files: newFilePath,
        from: /__template__/g,
        to: cName
      });
      await replaceInFile({
        files: newFilePath,
        from: /__Template__/g,
        to: formatName
      });
    }
    successLog(`Added the ${formatName} component to the libs!`);
  } catch (error) {
    errorLog(error);
  }
}

function warning(msg) {
  if (!msg) return;

  console.log(chalk.yellow(`Warning: ${msg}`));
}

function errorLog(msg) {
  if (!msg) return;

  console.log(chalk.red(`Error: ${msg}`));
}

function successLog(msg) {
  if (!msg) return;

  console.log(chalk.green(`Success🧩: ${msg}`));
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

