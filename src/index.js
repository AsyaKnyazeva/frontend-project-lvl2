import parse from './parsers.js';
import makeTree from './treeBuilder.js';
import formatFile from './formatters/index.js';

const gendiff = (path1, path2, format) => {
  const parsedFile1 = parse(path1);
  const parsedFile2 = parse(path2);
  const tree = makeTree(parsedFile1, parsedFile2);
  return formatFile(tree, format);
};
export default gendiff;
