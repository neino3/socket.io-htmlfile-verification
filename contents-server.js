var app = require('http').createServer(handler)
  , util = require('util')
  , fs = require('fs');

app.listen(8888);
console.log('contents server listening on 8888....');

function handler (req, res) {
  fs.readFile('index.html', function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }
    res.writeHead(200);
    res.end(data);
  });
}
