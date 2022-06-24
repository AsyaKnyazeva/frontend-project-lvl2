#!/usr/bin/env node
import { Command } from 'commander/esm.mjs';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference.')
  .version('output the version number')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .action((filepath1, filepath2) => {
    const diff = genDiff(filepath1, filepath2, program.opts().format);
    console.log(diff);
  });

program.parse();
