//This sets the variable for the spacebar.
var PlayerAttack;
var attackBullets;
var attack_speed = 6;
var spaceKey;
var charge = 0;
var mouse;
var charge;
var text;
var sin;
var rect;

//This sets the score to start at -1.
var score = -1;
var bmd;

var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';
var GameHero;
var SuperBadNet;

//This is the object which runs the game.
function preload(){
  game.load.spritesheet('enemy', 'assets/net.png', 64, 63.5);
  game.load.image('background', 'assets/background-underwater.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.spritesheet('attack', 'assets/Attack.png', 32, 32);
  game.load.spritesheet('player', 'assets/Player2Simple.png', 63.5, 64);
  game.load.spritesheet('level1Fray', 'assets/NetFray.png', 64, 63.5);
  game.load.spritesheet('level1Break', 'assets/NetBreak.png', 64, 63.5);
  game.load.audio('sing-success', 'assets/sing-success.wav');
  game.load.audio('sing-failure', 'assets/sing-fail.wav');
};

function create(){
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
  game.add.image(44, 80, 'background');
  GameHero = new Player(game, 100, 150);
  SuperBadNet = new EnemyNet(game, 500, 100);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(changingNet);

  PlayerAttack = new Attack(game)

  music = game.add.audio('startMusic');
  music.play();

  singGood = game.add.audio('sing-success');
  singBad = game.add.audio('sing-failure');
  //Create a Wave
  waveLevelNorm();

  //Create a cursor
  rect = game.add.graphics(100, 100);
  rect.beginFill(0xd0d0d0);
  rect.lineStyle(2, 0xd0d0d0, 1);
  rect.drawRect(200, 350, 3, 100);
  rect.endFill();

  //Animate cursor
  var tRect = game.add.tween(rect);
  tRect.to({width: 200, x: 500}, 1200, Phaser.Easing.Linear.None, true, 0, 9999, false).loop(true);

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
};

function handleAttack(){
  PlayerAttack.animateFire();
}

function kill(){
  SuperBadNet.sprite.kill();
  singGood.play();
}

function changingNet(){
  var value = SuperBadNet.sprite.key;
  if ((rect.x > 170 && rect.x < 190) ||
      (rect.x > 300 && rect.x < 320) ||
      (rect.x > 423 && rect.x < 443)) {
    PlayerAttack.fireWeapon(game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y + 55, 'attack', 1));
    if (value === 'enemy'){
      // singGood.play();
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 100, 'level1Fray');
    }
    if (value === 'level1Fray'){
      // singGood.play();
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 100, 'level1Break');
      game.time.events.add(Phaser.Timer.SECOND * 2, kill, this);
    }
  }
  console.log(rect.x);
  if ((rect.x > 120 && rect.x < 170) ||
      (rect.x > 190 && rect.x < 300) ||
      (rect.x > 443 && rect.x < 498)) {
    console.log("Bad");
  }
}



function update(){
  drawSin();
  handleAttack();
};


var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
