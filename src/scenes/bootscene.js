import Phaser from 'phaser';
import { CONST } from '../components/const';

export class BootScene extends Phaser.Scene {
    constructor() {
        super({
            key: CONST.SCENES.BOOT,
        });
    }

    preload() {
        // load resources here
        // map tiles
        this.load.image('tgrass', './src/assets/map/questmap/grass.png');
        this.load.image('tdirt', './src/assets/map/questmap/dirth.png');
        this.load.image('basemap', './src/assets/map/questmap/base.png');
        this.load.image('pond', './src/assets/map/questmap/water.png');

        /*         
               
                this.load.image('tpond', './src/assets/map/questmap/[A]Water7_pipo'); */

        // map in json format
        this.load.tilemapTiledJSON('map', './src/assets/map/questmap/devquestmap.json');

        // our two characters
        this.load.spritesheet('player', './src/assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    }

    create() {
        this.scene.start(CONST.SCENES.WORLD, 'hello from BootScene');
    }
}

export default BootScene;
