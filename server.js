var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/assets', express.static(__dirname + '/build/assets'));
app.use('/styles', express.static(__dirname + '/build/styles'));
app.use('/scripts', express.static(__dirname + '/build/scripts'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

server.listen(8081, function() {

});

server.lastPlayerId = 0;

io.on('connection', function(socket) {
  socket.on('newplayer', function() {
    socket.player = {
      id: server.lastPlayerId++,
      x: randomInt(100, 400),
      y: randomInt(100, 400),
      z: randomInt(100, 400)
    };
    socket.emit('allplayers', getAllPlayers());
    socket.broadcast.emit('newplayer', socket.player);

    socket.on('disconnect', function() {
      io.emit('remove', socket.player.id);
    });
  });
});

function getAllPlayers() {
  console.log('---------------------');
  var players = [];
  Object.keys(io.sockets.connected).forEach(function(socketID) {
    var player = io.sockets.connected[socketID].player;
    console.log(player.id);
    if (player) {
      players.push(player);
    }
  });
  console.log('---------------------');
  return players;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
