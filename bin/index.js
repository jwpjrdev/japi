#!/usr/bin/env node

/* eslint-disable no-restricted-syntax */

import fetch from 'node-fetch';
import { spawn } from 'node:child_process';

const fetchConfig = {
  headers: {
    pragma: 'no-cache',
    'cache-control': 'no-cache',
  },
};

function parseList(text) {
  let toReturn = [];
  const lines = text.split(/\r?\n/);

  for (const line of lines) {
    if (!line.startsWith('#')) {
      if (line.trim() !== '') {
        toReturn = toReturn.concat(line.split(','));
      }
    }
  }
  return toReturn;
}

async function fetchInstaller(key) {
  const response = await fetch(`https://raw.githubusercontent.com/jwpjrdev/napm/master/installers/src/${key}`, fetchConfig);
  const text = await response.text();
  return text;
}

let arg = process.argv.slice(2)[0];

if (!arg) {
  console.error('usage: napm [installer] - run an installer');
  console.error('usage: napm list - list all installers');
  process.exit(0);
}

arg = arg.toLowerCase();

const response = await fetch('https://raw.githubusercontent.com/jwpjrdev/napm/master/installers/list', fetchConfig);
const text = await response.text();
const keys = parseList(text);

if (arg === 'list') {
  const installers = keys.join(', ');
  console.log(`available installers: ${installers}`);
  process.exit(0);
}

if (!keys.includes(arg)) {
  console.error(`installer '${arg}' not found`);
  process.exit(0);
}

const installerScript = await fetchInstaller(arg);

spawn(installerScript, [], { shell: true, stdio: 'inherit' });
// .on('exit', (code) => console.log(code.toString()));
