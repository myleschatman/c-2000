import Player from '../prefabs/player';
import io from 'socket.io-client';

export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  init() {
    this.game.state.disableVisiblityChange = true;
  }

  preload() {

  }

  create() {
    this.playerMap = {};

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.socket = io.connect('http://localhost:8081');
    // this.player = new Player(this.game, 0, 0, 0);
    // this.game.add.existing(this.player);
    this.player = this.game.add.isoSprite(0,0,0,'blueplayer',0);
    this.game.physics.isoArcade.enable(this.player);
    this.game.camera.follow(this.player);
    this.player.destroy();
    // delete this.player;
    // console.log(this.player);
    //this.setEventHandlers(this.game);
  }

  update() {

  }

  setEventHandlers(game) {
    this.socket.on('connect', () => {

      this.socket.emit('newplayer');

      this.socket.on('newplayer', (data) => {
        this.playerMap[data.id] = new Player(game, data.x, data.y, data.z);
        game.add.existing(this.playerMap[data.id]);
      });

      this.socket.on('allplayers', (data) => {
        for (var i = 0; i < data.length; i++) {
          this.playerMap[data[i].id] = new Player(game, data[i].x, data[i].y, data[i].z);
          game.add.existing(this.playerMap[data[i].id]);
          console.log(this.playerMap[data[i].id]);
          this.playerMap[data[i].id].destroy();
        }
      });

      this.socket.on('remove', (id) => {
        // this.playerMap[id].destroy();
        // delete this.playerMap[id];
      });

      if (this.cursors.down.isDown) {
        this.movement = {
          x: 1,
          y: 1
        };
      }
      this.socket.emit('movement', this.movement);
    });
  }
}
