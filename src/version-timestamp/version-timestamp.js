'use strict';
try {
  var editJsonFile = require("edit-json-file");
  var replace = require('replace-in-file');
  var versionFile = editJsonFile('src/version-timestamp/version.json');

  var newPatch =  parseInt(versionFile.get("patch"), 10) + 1;
  var versionParts = versionFile.get("version").split('.');
  versionParts.pop();
  versionParts.push(newPatch);
  var newVersion = versionParts.join('.');
  var dateOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  var dateLocale = 'en-IN';
  var newTimeStamp = new Date().toLocaleString(dateLocale, dateOptions);
  newTimeStamp = newTimeStamp.replace(/\//g, "-").split(",").join("").toUpperCase();

  versionFile.set("version", newVersion);
  versionFile.set("patch", newPatch);
  versionFile.set("timeStamp", newTimeStamp);

  versionFile.save();

  var options = {
    files: [
      'src/environments/environment.ts',
      'src/environments/environment.prod.ts',
      'src/environments/environment.test.ts'
    ],
    from: [/appVersion: '(.*)'/g, /appTimeStamp: '(.*)'/g],
    to: ["appVersion: '" + newVersion + "'", "appTimeStamp: '" + newTimeStamp + "'"],
    allowEmptyPaths: false
  };
  replace.sync(options);
  console.log("TimeStamp created!");
} catch (error) {
  console.log("TimeStamp creation failed!");
  console.error(error);
}
