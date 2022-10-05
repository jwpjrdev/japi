#!/usr/bin/env node

const { parse, read } = require("properties-parser");

console.log(process.argv.slice(2));
console.log(read("data/commands.properties"));

