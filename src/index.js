import './style.css';
import Phaser from 'phaser';
import { BootScene } from './scenes/bootscene';
import { WorldScene } from './scenes/worldscene';

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  zoom: 2,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [
    BootScene,
    WorldScene,
  ],
};

const game = new Phaser.Game(config);