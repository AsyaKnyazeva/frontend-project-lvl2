#!/usr/bin/env node
import { fileURLToPath } from 'url';
import * as path from 'path';
import { gendiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFile1 = getPath('file1.json');
const jsonFile2 = getPath('file2.json');
const flatDiffResult = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';
const yamlFile1 = getPath('file1.yaml');
const yamlFile2 = getPath('file2.yaml');
test('gendiff', () => {
  expect(gendiff(jsonFile1, jsonFile2)).toMatch(flatDiffResult);
  expect(gendiff(yamlFile1, yamlFile2)).toMatch(flatDiffResult);
});
