#!/usr/bin/env node

var readJson = require('read-package-json');

readJson('package.json', function (er, data) {
  if (er) {
    console.error("There was an error reading the file");
    return;
  }

  console.log(data.version);
});
