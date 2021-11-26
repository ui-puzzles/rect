#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const childProcess = require('child_process');
const { exec, echo } = require('shelljs');
// const { Command } = require('commander');

const pkg = require('../package.json');
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
  exec('npm version minor --no-commit-hooks');
  exec('git add .');
  exec('git commit -m \'feat: upgrade version\'');
  exec('git push')
  exec('npm publish --access public');
  echo(`🎗publish success of version: ${pkg.version}!!!`);
}




