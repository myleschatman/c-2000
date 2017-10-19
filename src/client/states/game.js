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

    this.grass = this.game.add.isoSprite(0, 66, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 132, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 198, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 264, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 330, 0, 'grass_large');

    this.grass = this.game.add.isoSprite(66, 66, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(132, 66, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(198, 66, 0, 'grass_large');

    this.player = new Player(this.game);
    this.game.add.existing(this.player);
  }

  update() {

  }

}
