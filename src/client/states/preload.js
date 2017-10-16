export default class Preload extends Phaser.State {
  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.setPreloadSprite(this.asset);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.loadResources();
  }

  update() {
    if (this.ready) {
      this.game.state.start('game');
    }
  }

  loadResources() {
    this.game.load.image('blueplayer', 'assets/sprites/blueplayer_south.png');
  }

  onLoadComplete() {
    this.ready = true;
  }
}
