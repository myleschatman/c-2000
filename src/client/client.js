import io from 'socket.io-client';

export default class Client {
  constructor(game) {
    this.socket = io.connect('http://localhost:8081');

    this.socket.on('new player', (data) => {
      game.addNewPlayer(data.id, data.x, data.y, data.z);
    });

    this.socket.on('all players', (data) => {
      for (var i = 0; i < data.length; i++) {
        game.addNewPlayer(data[i].id, data[i].x, data[i].y, data[i].z);
      }
    });

    this.socket.on('move player', (data) => {
      game.movePlayer(data.id, data.x, data.y);
    });
  }

  getNewPlayer() {
    this.socket.emit('new player');
  }

  sendMovement(speed) {
    this.socket.emit('click', speed);
  }
}