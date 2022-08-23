import yaml from 'js-yaml';

const parse = (fileContent, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(`Invalid extension: '${extension}'! Try 'json', 'yml', or 'yaml'.`);
  }
};
export default parse;
