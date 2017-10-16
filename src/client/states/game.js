export default class Game {
  constructor() {

  }

  init() {
    this.game.state.disableVisiblityChange = true;
  }

  preload() {

  }

  create() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));

    this.game.add.sprite(0, 0, 'blueplayer');
  }

  update() {

  }
}
