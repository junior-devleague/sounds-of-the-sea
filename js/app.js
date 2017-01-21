//This sets the variable for the spacebar.
var spaceKey;

var player;

//This sets the score to start at -1.
var score = -1;


var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

//This is the object which runs the game.
function preload(){
  game.load.image('player', 'assets/player.png');
  game.load.image('enemy', 'assets/ship.png');
  game.load.spritesheet('enemy', 'assets/ship.png', 50, 45);
};

function create(){
  //Add player sprite to screen
  player = game.add.sprite(200, 300, 'player');
  //obstacle.scale.setTo(1,0.2);
  //obstacle.anchor.setTo(0,1);


  //Add enemy sprite to screen
  enemy = game.add.sprite(400, 300, 'enemy');
  //obstacle.scale.setTo(1, 0.2);
  enemy.animations.add('moving', [3, 4, 5]);
  enemy.animations.play('moving', 20, true);
  //obstacle.anchor.setTo(0,1);
};

function update(){

};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });