import Player from '../prefabs/player';

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
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.player = new Player(this.game);
    this.game.add.existing(this.player);
  }

  update() {

  }
}
