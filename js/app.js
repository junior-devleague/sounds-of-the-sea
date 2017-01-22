//This sets the variable for the spacebar.

var attack;
var attackBullets;
var attack_speed = 6;
var spaceKey;
var charge = 0;
var mouse;
var attack;
var charge;
var text;
var sin;

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
  game.load.spritesheet('player', 'assets/Player2Simple.png', 63, 64);
  game.load.spritesheet('enemy', 'assets/Net.png', 64, 63.5);
  game.load.image('background', 'assets/background-underwater.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.spritesheet('attack', 'assets/Attack.png', 32, 32);
};

function create(){
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
  game.add.image(44, 80, 'background');
  GameHero = new Player(game, 100, 150);
  SuperBadNet = new EnemyNet(game, 500, 100);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(useAbility);

  attack = game.add.group();

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

  //text = game.add.sprite(200, 200, 'text');

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
};

function useAbility() {
  attack.add(game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y + 55, 'attack', 7));
}

function handleAttack(){
  attack.children.forEach( attack => attack.x += attack_speed);
}

function update(){
  if (spaceKey.isDown === true || charge <= 10) {
    charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10;
  }
  setInterval(
    function(){
      player = game.add.sprite(900, 300, 'player');
    },3);

  drawSin();
  handleAttack();

  SuperBadNet.takeDamage(1);
};


var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
