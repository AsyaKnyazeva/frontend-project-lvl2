import _ from 'lodash';
import fs from 'fs';
import { parse } from './parsers.js';

export const gendiff = (path1, path2) => {
  const fileParse1 = parse(path1);
  const fileParse2 = parse(path2);
  return compareFiles(fileParse1, fileParse2);
};

const compareFiles = (data1, data2) => {
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const allKeys = _.union(keys1, keys2);
  const keysArr = [...allKeys];
  let diffString = '';
  keysArr.sort().map((key) => {
    if (!_.has(data1, key)) {
      return diffString += `  + ${key}: ${data2[key]}\n`;
    }
    if (!_.has(data2, key)) {
      return diffString += `  - ${key}: ${data1[key]}\n`;
    }
    if (data1[key] !== data2[key]) {
      return diffString += `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}\n`;
    }
    return diffString += `    ${key}: ${data1[key]}\n`;
  });
  const result = `{\n${diffString}}`;
  return result;
};
