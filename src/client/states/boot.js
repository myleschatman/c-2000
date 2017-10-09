export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {

  }

  create() {
    this.game.state.start('preload');
  }
}
