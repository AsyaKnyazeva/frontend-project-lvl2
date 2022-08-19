import yaml from 'js-yaml';
import * as path from 'path';
import fs from 'fs';

const parse = (filePath) => {
  if (path.extname(filePath) === '.json') {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  if (path.extname(filePath) === '.yml' || path.extname(filePath) === '.yaml') {
    return yaml.load(fs.readFileSync(filePath, 'utf-8'));
  }
  // throw new Error('Unknown data type');
};

export { parse };