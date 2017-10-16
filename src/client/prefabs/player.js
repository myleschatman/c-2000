export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game);

    this.sprite = this.game.add.isoSprite(200, 200, 0, 'blueplayer', 0);
    this.sprite.anchor.set(0.5, 0.5);

    this.sprite.animations.add('idle', Phaser.Animation.generateFrameNames('frame_', 1, 8), 9, true);

    this.sprite.speed = 150;

    this.game.physics.isoArcade.enable(this.sprite);
    this.game.camera.follow(this.sprite);
  }

  update() {
    this.walk();
  }

  walk() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
  }
}
