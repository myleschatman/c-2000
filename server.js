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
  socket.on('new player', function() {
    socket.player = {
      id: server.lastPlayerId++,
      x: randomInt(100, 400),
      y: randomInt(100, 400),
      z: randomInt(100, 400)
    };
    socket.emit('all players', getAllPlayers());
    socket.broadcast.emit('new player', socket.player);

    socket.on('click', function (data) {
      if (data.direction === 'down') {
        socket.player.x += data.speed;
        socket.player.y += data.speed;
      }
      io.emit('move player', socket.player);
    });

    socket.on('disconnect', function() {
      io.emit('remove player', socket.player.id);
    });
  });
});

function getAllPlayers() {
  var players = [];
  Object.keys(io.sockets.connected).forEach(function(socketID) {
    var player = io.sockets.connected[socketID].player;
    if (player) {
      players.push(player);
    }
  });
  return players;
}

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
