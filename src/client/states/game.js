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

    this.grass = this.game.add.isoSprite(0, 64, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 128, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 192, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 256, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 320, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 384, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 448, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 320, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 512, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 320, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 576, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 640, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 704, 0, 'grass_large');
    // this.grass = this.game.add.isoSprite(0, 768, 0, 'grass_large');
    this.grass = this.game.add.isoSprite(0, 832, 0, 'grass_large');

    this.player = new Player(this.game);
    this.game.add.existing(this.player);
  }

  update() {

  }
}
