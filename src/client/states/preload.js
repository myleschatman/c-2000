export default class Preload {
  constructor() {
    this.asset = null;
    this.ready = false;
  }

  preload() {

  }

  create() {

  }

  update() {
    if(this.ready) {
      this.game.state.start('menu');
    }
  }

  onLoadComplete() {
    this.ready = true;
  }
}
