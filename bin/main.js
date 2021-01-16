#!/usr/bin/env node
const chalk = require('chalk');
const program = require('commander');
const pkg = require('../package.json');

program.version(pkg.version).usage('<command> [options]');

program.on('--help', () => {
  console.log(chalk.green('Template'));
});

program
  .command('template')
  .description('Set the template options')
  .option('--parmm', 'Set template param');

program.parse(process.argv);

// trigger without param
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
