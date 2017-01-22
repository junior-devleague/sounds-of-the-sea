//This sets the variable for the spacebar.
var attackBullets;
var attack_speed = 6;
var background;
var bmd;
var bounds;
var cursorSpeed = 2.5;
var enemyAttack;
var GAME_CONTAINER_ID = 'gameDiv';
var GAME_HEIGHT = 600;
var GameHero;
var GAME_WIDTH = 800;
var mouse;
var PlayerAttack;
var playerAttack;
var playerSprite;
var prof;
var rect;
//This sets the score to start at -1.
var score = -1;
var sin;
var spaceKey;
// var speed = 50;
var spritePlayers = ['Aohmsen', 'Lura', 'Nat', 'Sheena', 'Player3', 'Christie'];
var SuperBadNet;
var text;
var walk;


//This is the object which runs the game.
function preload(){
  game.load.spritesheet('level1Fray', 'assets/Net2Fray.png', 64, 63.5);
  game.load.spritesheet('level1Sway', 'assets/Net2Sway.png', 64, 63.5);
  game.load.spritesheet('level1Break', 'assets/Net2Break.png', 64, 63.5);
  game.load.audio('sing-success', 'assets/sing-success.wav');
  game.load.audio('sing-failure', 'assets/sing-fail.wav');
  game.load.spritesheet('enemyAttack', 'assets/EnemyAttack.png', 57, 57);
  playerSprite = spritePlayers[Math.floor(Math.random() * spritePlayers.length)];
  var choseSprite = 'assets/' + playerSprite + ".png";
  game.load.spritesheet('player', choseSprite, 63, 64);
  game.load.spritesheet('enemy', 'assets/Net2.png', 64, 63.5);
  game.load.image('background', 'assets/NewBackground.png');
  game.load.audio('startMusic', 'assets/mermaids-bgm.ogg');
  game.load.spritesheet('attack', 'assets/Attack.png', 32, 32);
  game.load.spritesheet('profileF', 'assets/Profile.png', 55, 58);
  game.load.spritesheet('profileB', 'assets/ProfileBoy.png', 55, 58);
};

function create(){
  //Tiles background image
  background = game.add.tileSprite(0, -25, 800, 700, 'background');

  GameHero = new Player(game, 100, 200, playerSprite);
  SuperBadNet = new EnemyNet(game, 500, 150);
  PlayerAttack = new Attack(game);

  //Handle space bar press and call function on keyup
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(changingNet);

  //Create a Wave
  waveLevelNorm();
  waveBox();

  createCursor();
  animateCursor(5000);

  profileBox();

  music = game.add.audio('startMusic');
  music.play();

  singGood = game.add.audio('sing-success');
  singBad = game.add.audio('sing-failure');

  playerAttack = game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y - 190, 'attack');
};

function createCursor(){
  rect = game.add.graphics(100, 100);
  rect.beginFill(0xd0d0d0);
  rect.lineStyle(2, 0xd0d0d0, 1);
  rect.drawRect(293, 372, 3, 94);
  rect.endFill();
}

function animateCursor(speed){
  var tRect = game.add.tween(rect);
  tRect.to({x: 500}, speed, Phaser.Easing.Linear.None, true).loop('true');
}

function handleAttack(){
  PlayerAttack.animateFire();
};

function kill(){
  SuperBadNet.sprite.kill();
  singGood.play();
};

function killEnemyAttack(){
  enemyAttack.kill();
};

function killPlayer(){
  GameHero.sprite.kill();
}

function fireWeapon(){
  playerAttack = game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y - 370, 'attack');
  playerAttack.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  playerAttack.scale.setTo(10,30);
  playerAttack.animations.play('walk', 5, true);
}

function changingNet(){
  console.log(rect.x);
  var value = SuperBadNet.sprite.key;
  if ((rect.x > 190 && rect.x < 220) ||
      (rect.x > 320 && rect.x < 340) ||
      (rect.x > 450 && rect.x < 470)) {
    fireWeapon();
    if (value === 'enemy'){
      SuperBadNet.takeDamage(100 * .5);
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Fray');
    }
    if (value === 'level1Fray'){
      SuperBadNet.takeDamage(50 * .5);
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Sway');
    }
    if (value === 'level1Sway'){
      SuperBadNet.takeDamage(0);
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Break');
      game.time.events.add(Phaser.Timer.SECOND * 2, kill, this);
      game.time.events.add(Phaser.Timer.SECOND * 2.5, win, this);
    }
  }
  if ((rect.x > 120 && rect.x < 190) ||
      (rect.x > 220 && rect.x < 320) ||
      (rect.x > 340 && rect.x < 450) ||
      (rect.x > 470 && rect.x < 500)) {
    singGood.stop();
    GameHero.takeDamage(50);
    cursorSpeed += 10;
    animateCursor(2000);
    singBad.play();
    if(enemyAttack){
      GameHero.takeDamage(0);
      enemyAttack.kill();
      game.time.events.add(Phaser.Timer.SECOND * 1, kill, this);
      game.time.events.add(Phaser.Timer.SECOND * 1, killPlayer, this);
      game.time.events.add(Phaser.Timer.SECOND * 1, killEnemyAttack, this);
      game.time.events.add(Phaser.Timer.SECOND * 1, gameOver, this);
    }
    enemyAttack = game.add.sprite(150, 80, 'enemyAttack');
    enemyAttack.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    enemyAttack.scale.setTo(1.5,4.5);
    enemyAttack.angle + 500;
    enemyAttack.animations.play('walk', 5, true);
    game.time.events.add(Phaser.Timer.SECOND * 1, killEnemyAttack, this);
    // enemyAttack.kill();
  }
};

function update(){
  drawSin();
  handleAttack();

  //Controls the speed of the background waves
  background.tilePosition.x -= cursorSpeed;
  playerAttack.x += 11;
};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });