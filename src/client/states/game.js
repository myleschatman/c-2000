import Player from '../prefabs/player';
import Client from '../client';

export default class Game extends Phaser.State {
  constructor() {
    super();
    this.client = new Client(this);
  }

  init() {
    this.game.state.disableVisiblityChange = true;
  }

  preload() {

  }

  create() {
    // this.setEventHandlers(this.game);
    this.playerMap = {};

    this.client.getNewPlayer();
  }

  update() {

  }

  // setEventHandlers(game) {
  //   this.socket.on('connect', () => {

  //     this.socket.emit('newplayer');

  //     this.socket.on('newplayer', (data) => {
  //       this.playerMap[data.id] = new Player(game, data.x, data.y, data.z);
  //       game.add.existing(this.playerMap[data.id]);
  //     });

  //     this.socket.on('allplayers', (data) => {
  //       for (var i = 0; i < data.length; i++) {
  //         this.playerMap[data[i].id] = new Player(game, data[i].x, data[i].y, data[i].z);
  //         game.add.existing(this.playerMap[data[i].id]);
  //       }
  //     });

  //     this.socket.on('remove', (id) => {
  //       this.playerMap[id].destroy();
  //       delete this.playerMap[id];
  //     });
  //   });
  // }

  addNewPlayer(id, x, y, z) {
    this.playerMap[id] = new Player(this.game, x, y, z);
    this.game.add.existing(this.playerMap[id]);
  }
}
