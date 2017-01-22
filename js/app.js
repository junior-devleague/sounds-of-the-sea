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

  //Add enemy sprite to screen

  enemy = game.add.sprite(500, 100, 'enemy');
  enemy.scale.setTo(4,4);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //obstacle.scale.setTo(1, 0.2);
  enemy.animations.add('moving', [0, 1, 2, 3]);
  enemy.animations.play('moving', 5, true);

  SuperBadNet = new EnemyNet(game, 500, 100);


  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  music = game.add.audio('startMusic');

  music.play();

  //Create a Wave
  waveLevelNorm();

  //Create a cursor
  var rect = game.add.graphics(100, 100);
  rect.beginFill(0xd0d0d0);
  rect.lineStyle(2, 0xd0d0d0, 1);
  rect.drawRect(200, 350, 3, 100);
  rect.endFill();

  //Animate cursor
  var tRect = game.add.tween(rect);
  tRect.to({width: 200, x: 500}, 2500, Phaser.Easing.Linear.None, true, 0, 9999, false).loop(true);

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

  drawSin();
};

function useAbility() {
  console.log('cow');
}

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
