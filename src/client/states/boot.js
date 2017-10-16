export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');
  }

  create() {
    this.game.state.start('preload');
  }
}
