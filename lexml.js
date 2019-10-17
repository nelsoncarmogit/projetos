var http = require('http');
var fs = require('fs');
//var xmlparser = require('express-xml-bodyparser');


var result = fs.readFileSync("C:/temp/EXA.json");
var obj = JSON.parse(result);
var keys = Object.keys(obj);
for (var i = 0; i < keys.length; i++) {
  console.log(obj[keys[i]]);
}

/*
http.createServer(function (req, res) {
    fs.readFile('c:/temp/00000000000000004550_383A7E743E9BD055F701F6FD5A57D9E3.xml', 'utf-8', function (err, data) {
        var linhas = data.split(/\r?\n/);
        linhas.forEach(function (linha) {
            var linha2 = linha.replace(/\s/g, '');
            //res.write(linha2);
            if (linha2.substr(0, 21) == "<ans:valorTotalGeral>") {
                res.write(linha2);
                
                //console.log(linha2);
            }
        })
        res.end();
    })
}).listen(3000);

*/
/*

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('lexml.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3000);
*/
