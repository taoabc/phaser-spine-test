import Phaser from 'phaser';

var config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  scene: {
      preload: preload,
      create: create,
      pack: {
          files: [
              { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpineWebGLPlugin.js', sceneKey: 'spine' }
          ]
      }
  }
};

new Phaser.Game(config);

function preload (this: Phaser.Scene)
{
  // this.load.image('logo', 'assets/sprites/phaser.png');

  this.load.setPath('assets/');
  // this.plugins

  this.load.spine('set1', 'raptor-pro.json', [ 'raptor-pma.atlas' ], true);
}

function create (this: Phaser.Scene)
{
  // this.add.image(0, 0, 'logo').setOrigin(0);

  this.add.spine(400, 600, 'set1.raptor', 'roar', true);
}