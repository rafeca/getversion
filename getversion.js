#!/usr/bin/env node

var path = require('path');

var packagePath = process.argv.length > 2 ? process.argv[2] : './';
packagePath = path.resolve(process.cwd(), packagePath);

try {
  console.log(require(path.join(packagePath, 'package.json')).version);
} catch (er) {
  console.error('There was an error reading the file');
}
