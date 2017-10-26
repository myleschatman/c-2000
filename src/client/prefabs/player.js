export default class Player extends Phaser.Sprite {
  constructor(game, x, y, z) {
    super(game);

    this.sprite = this.game.add.isoSprite(x, y, z, 'blueplayer', 0);
    this.sprite.anchor.set(0.5, 0.5);
    // this.sprite.scale.setTo(0.78);

    this.sprite.animations.add('Walk_North', [0], 1, true);
    this.sprite.animations.add('Walk_NorthEast', [1], 1, true);
    this.sprite.animations.add('Walk_East', [2], 1, true);
    this.sprite.animations.add('Walk_SouthEast', [3], 1, true);
    this.sprite.animations.add('Walk_South', [4], 1, true);
    this.sprite.animations.add('Walk_SouthWest', [5], 1, true);
    this.sprite.animations.add('Walk_West', [6], 1, true);
    this.sprite.animations.add('Walk_NorthWest', [7], 1, true);

    this.sprite.speed = 150;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.physics.isoArcade.enable(this.sprite);

    this.sprite.body.collideWorldBounds = true;
    this.game.camera.follow(this.sprite);
  }

  update() {
    this.walk();
  }

  walk() {
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.y = -this.sprite.speed - 50;
      this.sprite.animations.play('Walk_NorthEast');
    } else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed - 50;
      this.sprite.animations.play('Walk_NorthWest');
    }
    else if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed + 50;
      this.sprite.animations.play('Walk_SouthEast');
    } else if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.sprite.body.velocity.y = this.sprite.speed + 50;
      this.sprite.animations.play('Walk_SouthWest');
    } else if (this.cursors.up.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_North');
    } else if (this.cursors.down.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = this.sprite.speed;
      this.sprite.animations.play('Walk_South');
    } else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = this.sprite.speed;
      this.sprite.body.velocity.y = -this.sprite.speed;
      this.sprite.animations.play('Walk_East');
    } else if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -this.sprite.speed;
      this.sprite.body.velocity.y = this.sprite.speed;
      this.sprite.animations.play('Walk_West');
    } else {
      this.sprite.animations.stop();
    }
  }
}
