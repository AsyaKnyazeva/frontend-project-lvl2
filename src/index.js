import parse from './parsers.js';
import makeTree from './treeBuilder.js';
import formatFile from './formatters/index.js';
import fs from 'fs';
import path from 'path';
import process from 'node:process';
const getAbsolutePath = (file) => path.resolve(process.cwd(), file);

const getExtensions = (file) => path.extname(file).slice(1);

const getContentFromFile = (file) => {
  const absolutePath = getAbsolutePath(file);
  const fileContent = fs.readFileSync(absolutePath, 'utf8');
  const extension = getExtensions(file);
  return parse(fileContent, extension);
};

const gendiff = (path1, path2, format = 'stylish') => {
  const parsedFile1 = getContentFromFile(path1);
  const parsedFile2 = getContentFromFile(path2);
  const tree = makeTree(parsedFile1, parsedFile2);
  return formatFile(tree, format);
};
export default gendiff;
