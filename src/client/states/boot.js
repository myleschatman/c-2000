export default class Boot extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.load.image('preloader', 'assets/preloader.gif');

    this.game.time.advancedTiming = true;

    this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
    this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

    this.game.iso.anchor.setTo(0.5, 0.2);
  }

  create() {
    this.game.input.maxPointers = 1;

    this.game.state.start('Preload');
  }
}
