//This sets the variable for the spacebar.

var attack;
var attackBullets;
var attack_speed = 25;
var spaceKey;
var charge = 0;
var mouse;
var attack;
var charge;
var text;
var sin;
var bounds;
var background;
var playerSprite;
var spritePlayers = ['Player2Simple', 'Aohmsen', 'Lura', 'Nat', 'Sheena', 'Player3', 'PlayerBoy'];

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
  playerSprite = spritePlayers[Math.floor(Math.random() * spritePlayers.length)];
  var choseSprite = 'assets/' + playerSprite + ".png";

  game.load.spritesheet('player', choseSprite, 63, 64);
  game.load.spritesheet('enemy', 'assets/Net.png', 64, 63.5);
  game.load.image('background', 'assets/NewBackground.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.spritesheet('attack', 'assets/Attack.png', 32, 32)
  game.load.spritesheet('profile', 'assets/Profile.png');

};

function create(){
  //Tiles background image
  background = game.add.tileSprite(0, -25, 800, 700, 'background');

  GameHero = new Player(game, 100, 150, playerSprite);
  SuperBadNet = new EnemyNet(game, 500, 150);

  //Handle space bar press and call function on keyup
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(useAbility);

  attack = game.add.group();

  music = game.add.audio('startMusic');
  music.play();

  //Create a Wave
  waveLevelNorm();
  waveBox();

  //Create a cursor
  var rect = game.add.graphics(100, 100);
  rect.beginFill(0xd0d0d0);
  rect.lineStyle(2, 0xd0d0d0, 1);
  rect.drawRect(285, 392, 3, 96);
  rect.endFill();

  //Animate cursor
  var tRect = game.add.tween(rect);
  tRect.to({x: 500}, 5000, Phaser.Easing.Linear.None, true).loop('true');

  //Create profile box
  profileBox();

  //text = game.add.sprite(200, 200, 'text');

};

function useAbility() {
  attack.add(game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y + 55, 'attack', 7));
}

function handleAttack(){
  attack.children.forEach( attack => attack.x += attack_speed);
}

function update(){
  //Controls the speed of the background waves
  background.tilePosition.x -= 2.5
  ;
  if (spaceKey.isDown === true || charge <= 10) {
    charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10;
  }

  drawSin();
  handleAttack();

  GameHero.takeDamage(24);
  SuperBadNet.takeDamage(10);
};


var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
