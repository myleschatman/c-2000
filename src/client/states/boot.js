export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
  }

  create() {
    this.game.state.start('preload');
  }
}
