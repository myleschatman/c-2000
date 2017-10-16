export default class Player extends Phaser.Sprite {
  constructor(game) {
    super(game);

    this.sprite = this.game.add.isoSprite(0, 0, 0, 'blueplayer', 0);
    this.sprite.anchor.set(0.5, 0.5);

    this.sprite.animations.add("Walk_North", [0], 1, true);

    this.sprite.speed = 150;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.physics.isoArcade.enable(this.sprite);

    this.game.camera.follow(this.sprite);
  }

  update() {
    this.walk();
  }

  walk() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_North');
    }
    else () {
      this.sprite.animations.stop();
    }
  }
}
