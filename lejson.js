/////var http = require('http');
var fs = require('fs');
var result = fs.readFileSync("C:/temp/EXA.json");
var obj = JSON.parse(result);
var keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++) {
  console.log(obj[keys[i]]);
}

