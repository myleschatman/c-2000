import io from 'socket.io-client';

export default class Client {
  constructor() {
    this.socket = io.connect();
  }

  askNewPlayer() {
    this.socket.emit('newplayer');
  }
}
