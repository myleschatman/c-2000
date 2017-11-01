import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import Game from './states/game';

class App extends Phaser.Game {
  constructor() {
    super(24*32, 17*32, Phaser.AUTO, 'game');

    this.state.add('Boot', Boot);
    this.state.add('Preload', Preload);
    this.state.add('Menu', Menu);
    this.state.add('Game', Game);

    this.state.start('Boot');
  }
}

new App();