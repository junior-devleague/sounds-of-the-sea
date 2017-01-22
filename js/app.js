console.log(Phaser);
//This sets the variable for the spacebar.
var spaceKey;
var charge = 0;
var mouse;

var player;
var attack;
var charge;

var sin;

//This sets the score to start at -1.
var score = -1;

var bmd;
var sin;



var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

//This is the object which runs the game.
function preload(){
  game.load.spritesheet('player', 'assets/Player2Simple.png', 63, 64);
  //game.load.image('enemy', 'assets/ship.png');
  game.load.spritesheet('enemy', 'assets/net.png', 64, 64);

  game.load.image('background', 'assets/background-underwater.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.image('attack', 'assets/attack.png');
};

function create(){

  //game.add.tileSprite(0, 0, 1000, 600, "background")

  game.add.image(44, 80, 'background');
  //Add player sprite to screen
  player = game.add.sprite(200, 200, 'player');
  player.scale.setTo(2,2);
  //obstacle.anchor.setTo(0,1);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //Add enemy sprite to screen
  enemy = game.add.sprite(500, 100, 'enemy');
  enemy.scale.setTo(4,4);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //obstacle.scale.setTo(1, 0.2);
  enemy.animations.add('moving', [0, 1, 2, 3]);
  enemy.animations.play('moving', 5, true);

  player.animations.add('moving', [0, 1, 2, 3]);
  player.animations.play('moving', 9, true);

  music = game.add.audio('startMusic');

  music.play();

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);

  sin = data.sin;

    //  Just so we can see the data
  bmd = game.add.bitmapData(800, 600);

  //obstacle.anchor.setTo(0,1);

  // //Create a Wave
  waveLevelNorm();
};

function update(){
  if (spaceKey.isDown === true || charge <= 10) {
    console.log("hi")
    charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10;
  }

  useAbility();
  // Draw sinData

  drawSin();
};

function useAbility() {
  console.log('cow');
}

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
