import { fileURLToPath } from 'url';
import * as path from 'path';
import  gendiff   from '../src/index.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFile1 = getPath('file1.json');
const jsonFile2 = getPath('file2.json');
const yamlFile1 = getPath('file1.yaml');
const yamlFile2 = getPath('file2.yaml');
const testFileStylish = getPath('expectedStylish.txt');
const expectedStylish= fs.readFileSync(testFileStylish, 'utf-8');
const testFilePlain = getPath('expectedPlain.txt');
const expectedPlain= fs.readFileSync(testFilePlain, 'utf-8');
const testFileJson = getPath('expectedJson.txt');
const expected = fs.readFileSync(testFileJson, 'utf-8');
test('gendiff', () => {
  expect(gendiff(jsonFile1, jsonFile2 )).toEqual(expectedStylish);
  expect(gendiff(yamlFile1, yamlFile2 )).toEqual(expectedStylish)
  expect(gendiff(yamlFile1, yamlFile2, 'plain' )).toEqual(expectedPlain);
  expect(gendiff(jsonFile1, jsonFile2, 'plain' )).toEqual(expectedPlain);
  expect(gendiff(yamlFile1, yamlFile2, 'json' )).toEqual(expected);
  expect(gendiff(jsonFile1, jsonFile2, 'json' )).toEqual(expected);
});
