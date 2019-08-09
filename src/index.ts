import Phaser from 'phaser';
// import TestPlugin from './test-plugin';

var config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  width: 1920,
  height: 1200,
  backgroundColor: '#2d2d2d',
  // plugins: {
  //   scene: [
  //     { key: 'Test', plugin: TestPlugin, mapping: 'testplugin'}
  //   ]
  // },
  scene: {
      preload: preload,
      create: create,
      pack: {
          files: [
              { type: 'scenePlugin', key: 'SpinePlugin', url: 'plugins/SpinePlugin.min.js', sceneKey: 'spine' }
          ]
      }
  }
};

new Phaser.Game(config);

function preload (this: Phaser.Scene)
{
  // this.load.image('logo', 'assets/sprites/phaser.png');

  this.load.setPath('assets/');
  // // this.plugins

  this.load.spine('raptor', 'raptor-pro.json', [ 'raptor-pma.atlas' ], true);
  this.load.spine('spineboy', 'spineboy-ess.json', [ 'spineboy.atlas' ], false);
  // this.load.scenePlugin({
  //   key: 'SpineWebGLPlugin',
  //   url: 'plugins/SpineWebGLPlugin.js',
  //   sceneKey: 'SpineWebGLPlugin'
  // })
}

function create (this: Phaser.Scene)
{
  // this.add.image(0, 0, 'logo').setOrigin(0);
  for (let j = 0; j < 10; ++j) {
    for (let i = 0; i < 10; ++i) {
      const a = this.add.spine(i * 200 + 100, j * 100 + 200, 'raptor', 'walk', true);
      a.scaleX = 0.2;
      a.scaleY = 0.2;
    }
  }
}