console.log(Phaser);
//This sets the variable for the spacebar.
var spaceKey;
var charge = 0;
var mouse;
var closeButton = game.make.sprite(pw, -ph, 'close');
    closeButton.inputEnabled = true;
    closeButton.input.priorityID = 1;
    closeButton.input.useHandCursor = true;
    closeButton.events.onInputDown.add(closeWindow, this);
var player;
var attack;
var charge;

//This sets the score to start at -1.
var score = -1;

var bmd;
var sin;

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';
var GameHero;
var SuperBadNet;

//This is the object which runs the game.
function preload(){
  game.load.spritesheet('player', 'assets/Player2Simple.png', 63, 64);
  game.load.spritesheet('enemy', 'assets/net.png', 64, 64);
  game.load.image('background', 'assets/background-underwater.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.image('attack', 'assets/attack.png');
};

function create(){
  game.add.image(44, 80, 'background');
  //Create single GameHero Player instance
  GameHero = new Player(game, 200, 200);

  //Add enemy sprite to screen
  SuperBadNet = new EnemyNet(game, 500, 100);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  music = game.add.audio('startMusic');

  music.play();

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);

  sin = data.sin;

    //  Just so we can see the data
  bmd = game.add.bitmapData(800, 600);

  //Create a Wave
  waveLevelNorm();
};

// function openWindow() {

//     if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
//     {
//         return;
//     }

//     //  Create a tween that will pop-open the window, but only if it's not already tweening or open
//     tween = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

// }

function update(){
  if (spaceKey.isDown === true || charge <= 10) {
    console.log("hi")
    charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10;
  }

  useAbility();

  drawSin();
};
// function closeWindow() {

//     if (tween && tween.isRunning || popup.scale.x === 0.1)
//     {
//         return;
//     }

//     //  Create a tween that will close the window, but only if it's not already tweening or closed
//     tween = game.add.tween(popup.scale).to( { x: 0.1, y: 0.1 }, 500, Phaser.Easing.Elastic.In, true);

// }

function useAbility() {
  console.log('cow');
}

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
