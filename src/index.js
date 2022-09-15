#!/usr/bin/env node
const { program } = require('commander');
const download = require('./download.js');

program
  .version('0.1.0');

program
	.command('download')
	.arguments('<url>')
	.action(download);

program.parse();

if (process.argv.length < 3)
  program.help()
