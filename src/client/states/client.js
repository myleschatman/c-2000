import io from 'socket.io-client';
import Player from '../prefabs/player';

export default class Client {
  constructor() {
    this.socket = io.connect();

    this.playerMap = {};
  }

  // askNewPlayer() {
  //   this.socket.emit('newplayer');
  // }

  addNewPlayer(game) {
    this.socket.on('newplayer', function(data) {
      this.playerMap[data.id] = new Player(game, data.x, data.y, data.z);
    });
  }
}
