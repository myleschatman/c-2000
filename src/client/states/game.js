import Player from '../prefabs/player';
import Client from '../client';

export default class Game extends Phaser.State {
  constructor() {
    super();
    this.client = new Client(this);
  }

  init() {
    this.game.state.disableVisiblityChange = false;
  }

  preload() {

  }

  create() {
    this.playerMap = {};

    this.client.getNewPlayer();
    this.game.add.isoSprite(0, 0, 0, 'grass_large');
    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
    var speed = 100;

    if (this.cursors.down.isDown) {
      this.client.sendMovement(speed);
    }
  }

  addNewPlayer(id, x, y, z) {
    this.playerMap[id] = new Player(this.game, x, y, z);
    this.game.add.existing(this.playerMap[id]);
  }

  movePlayer(id, x, y) {
    this.playerMap[id].body.velocity.x = x;
    this.playerMap[id].body.velocity.y = y;
  }
}
