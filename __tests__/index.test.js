import { fileURLToPath } from 'url';
import * as path from 'path';
import { genDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const jsonFile1 = getPath('file1.json');
const jsonFile2 = getPath('file2.json');
const jsonDiffResult = `{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`
test('genDiff', () => {
  expect(genDiff(jsonFile1, jsonFile2 )).toMatch(jsonDiffResult);
});

