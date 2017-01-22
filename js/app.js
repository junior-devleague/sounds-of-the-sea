console.log(Phaser);
//This sets the variable for the spacebar.

var attack;
var attackBullets;
var attack_speed = 6;
var bmd;
var player;
var sin;
var spaceKey;
var charge = 0;

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
  game.load.spritesheet('attack', 'assets/attack.png', 32, 32);
};

function create(){

  //game.add.tileSprite(0, 0, 1000, 600, "background")

  game.add.image(44, 80, 'background');
  //Add player sprite to screen
  player = game.add.sprite(200, 200, 'player');
  player.scale.setTo(2,2);
  //obstacle.anchor.setTo(0,1);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //Add enemy sprit  to screen
  enemy = game.add.sprite(500, 100, 'enemy');
  enemy.scale.setTo(4,4);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //obstacle.scale.setTo(1, 0.2);
  enemy.animations.add('moving', [0, 1, 2, 3]);
  enemy.animations.play('moving', 5, true);

  player.animations.add('moving', [0, 1, 2, 3]);
  player.animations.play('moving', 9, true);

  spaceKey.onUp.add(useAbility);
  music = game.add.audio('startMusic');

  music.play();

  attack = game.add.group();
  attack.callAll('animations.add', 'animations', 'moving', [0, 1, 2, 3], 10, true);

  //  And play them
  attack.callAll('animations.play', 'animations', 'moving');

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);

  sin = data.sin;

    //  Just so we can see the data
  bmd = game.add.bitmapData(800, 600);

  //obstacle.anchor.setTo(0,1);

  // //Create a Wave
  waveLevelNorm();
};

function useAbility() {
  // console.log('cow');
  attack.add(game.add.sprite(player.x, player.y, 'attack', 7));
}

function handleAttack(){
  attack.children.forEach( attack => attack.x += attack_speed);
}

function update(){
  if (spaceKey.isDown === true || charge <= 10) {
    //console.log("hi")
    charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10;
  }

  //useAbility();
  // Draw sinData

  drawSin();
  handleAttack();
};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
