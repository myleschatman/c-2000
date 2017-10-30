import io from 'socket.io-client';

export default class Client {
  constructor(game) {
    this.socket = io.connect('http://localhost:8081');

    this.socket.on('newplayer', (data) => {
      game.addNewPlayer(data.id, data.x, data.y, data.z);
    });
  }

  getNewPlayer() {
    this.socket.emit('newplayer');
  }

}