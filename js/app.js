//This sets the variable for the spacebar.
var spaceKey;
var player;
var sin;

//This sets the score to start at -1.
var score = -1;

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';
let GameHero;
let SuperBadNet;

//This is the object which runs the game.
function preload(){
  game.load.spritesheet('player', 'assets/player.png', 55, 48);
  game.load.spritesheet('enemy', 'assets/ship.png', 50, 45);
  game.load.image('background', 'assets/background-underwater.png');
};

function create(){
  game.add.image(44, 80, 'background');
  //Create single GameHero Player instance
  GameHero = new Player(game, 200, 300);

  //Add enemy sprite to screen
  SuperBadNet = new EnemyNet(game, 300, 400);

  //Create a Wave
  waveLevelNorm();
};

function update(){
  // // Draw sinData
  drawSin();

};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
