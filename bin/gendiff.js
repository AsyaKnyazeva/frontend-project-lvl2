#!/usr/bin/env node
import { Command } from "../node_modules/commander/esm.mjs";
const program = new Command();
program
.description('Compares two configuration files and shows a difference.')
.version('output the version number');

program.parse();

