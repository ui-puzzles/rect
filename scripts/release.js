#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const childProcess = require('child_process');
const { exec, echo } = require('shelljs');
// const { Command } = require('commander');

// const pkg = require('../package.json');
const {
  warning,
} = require('./helper');

const curBranch = childProcess.execSync('git rev-parse --abbrev-ref HEAD').toString().replace(/\s+/, '');
const isBranchMain = curBranch === 'main' || curBranch === 'master';

if (!isBranchMain) {
  warning(`The publish operation should be in the main branch, but now it's ${curBranch}. You can execute "git checkout main".`);
  console.log();
  return;
}

publishMinor();

function publishMinor() {
  echo('🏈Starting publish a version of minor...');
  exec('npm version minor');
  exec('git push');
  exec('npm publish --access public');
  echo(`🎗publish success of version: ${require('../package.json').version}!!!`);

  buildDocs();
}

function buildDocs() {
  console.log();
  echo('🐶Starting build docs...');
  exec('npm run build-storybook');
  exec('git add .');
  exec('git commit -m \'feat: upgrade docs\'');
  exec('git push');
  echo('✅upgrade success');
}




