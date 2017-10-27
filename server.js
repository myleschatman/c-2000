var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/scripts', express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(8081, function() {

});

server.lastPlayerId = 0;

io.on('connection', function(socket) {
  console.log('Made socket connection with client.', socket.id);
  socket.on('newplayer', function() {
    console.log('Received request to add new player.')
    socket.player = {
      id: server.lastPlayerId++,
      x: randomInt(100, 400),
      y: randomInt(100, 400),
      z: randomInt(100, 400)
    };
    socket.emit('allplayers', getAllPlayers());
    socket.broadcast.emit('newplayer', socket.player);
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
