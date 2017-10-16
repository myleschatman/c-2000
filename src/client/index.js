import Boot from './states/boot';
import Preload from './states/preload';
import Menu from './states/menu';
import Game from './states/game';

// const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game');
const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('boot', new Boot());
game.state.add('preload', new Preload());
game.state.add('menu', new Menu());
game.state.add('game', new Game());

game.state.start('boot');
