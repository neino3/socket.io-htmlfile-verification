var app = require('http').createServer()
  , io = require('socket.io').listen(app)
  , util = require('util')
  , fs = require('fs');

app.listen(7777);
console.log('socket.io server listening on 7777....');

io.sockets.on('connection', function (socket) {
  console.log('connected to socket.io server');
  socket.on('disconnect', function () {
    console.log('disconnected');
  });
});