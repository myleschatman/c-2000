export default class Player extends Phaser.Plugin.Isometric.IsoSprite {
  constructor(game, x, y, z) {
    super(game, x, y, z, 'blueplayer', 0);

    this.anchor.set(0.5, 0.5);

    this.animations.add('Walk_North', [0], 1, true);
    this.animations.add('Walk_NorthEast', [1], 1, true);
    this.animations.add('Walk_East', [2], 1, true);
    this.animations.add('Walk_SouthEast', [3], 1, true);
    this.animations.add('Walk_South', [4], 1, true);
    this.animations.add('Walk_SouthWest', [5], 1, true);
    this.animations.add('Walk_West', [6], 1, true);
    this.animations.add('Walk_NorthWest', [7], 1, true);

    this.game.physics.isoArcade.enable(this);
    this.body.collideWorldBounds = true;
  }
}
