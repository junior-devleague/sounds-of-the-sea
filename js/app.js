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
};

function create(){
  game.add.sprite(200, 300, 'player');
  obstacle.scale.setTo(1,0.2);
  obstacle.anchor.setTo(0,1);
};

function update(){

};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });