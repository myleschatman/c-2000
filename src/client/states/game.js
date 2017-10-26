import Player from '../prefabs/player';
import Client from './client';

export default class Game extends Phaser.State {
  constructor() {
    super();
  }

  init() {
    this.game.state.disableVisiblityChange = true;
  }

  preload() {

  }

  create(game) {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.client = new Client();
    // this.client.askNewPlayer();
    this.client.addNewPlayer(this.game);
  }

  update() {

  }
}
