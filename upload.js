//var mongoose = require('mongoose');

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/temp/' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('Arquivo Copiado para: C:/temp/' + files.filetoupload.name);
        res.write('<br><br><input type="button" value="Voltar" onClick="history.go(-1)">'); 
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<br><input type="file" name="filetoupload" required><br><br>');
    res.write('<input type="submit" value = "Enviar">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080); 