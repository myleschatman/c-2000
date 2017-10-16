export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');

    this.game.time.advancedTiming = true;

    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
    this.game.world.setBounds(0, 0, 800, 600);
    this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
  }

  create() {
    this.game.state.start('preload');
  }
}
