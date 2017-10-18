var express = require('express');
var app = express();
var server = require('http').Server(app);
// var io = require('socket.io').listen(server);

// app.use('/src', express.static(__dirname + '/src'));
// app.use('/static', express.static(__dirname + '/static'));
app.use('/build', express.static(__dirname + '/build'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function() {

});
