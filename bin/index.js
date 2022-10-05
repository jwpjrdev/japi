#!/usr/bin/env node

import { parse } from 'properties-parser';
import fetch from 'node-fetch';
import { spawn } from 'node:child_process';

let arg = process.argv.slice(2)[0];

if (!arg) {
  console.error('usage: installit [installer] - run an installer');
  console.error('usage: installit list - list all installers');
  process.exit(0);
}

arg = arg.toLowerCase();

const response = await fetch('https://raw.githubusercontent.com/jwpjrdev/installit/master/data/commands.properties');
const commands = parse(await response.text());

const keys = Object.keys(commands);

if (arg === 'list') {
  const installers = keys.join(', ');
  console.log(`available installers: ${installers}`);
  process.exit(0);
}

if (!keys.includes(arg)) {
  console.error(`installer '${arg}' not found`);
  process.exit(0);
}

spawn(commands[arg], [], { shell: true, stdio: 'inherit' });
// .on('exit', (code) => console.log(code.toString()));
