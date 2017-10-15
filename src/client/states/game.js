export default class Game {
  constructor() {

  }

  init() {
    this.game.state.disableVisiblityChange = true;
  }
  
  create() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
  }

  update() {

  }
}
