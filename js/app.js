//This sets the variable for the spacebar.
var attackBullets;
var attack_speed = 6;
var background;
var bmd;
var bounds;
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
var spritePlayers = ['Player2Simple', 'Aohmsen', 'Lura', 'Nat', 'Sheena', 'Player3', 'PlayerBoy'];
var SuperBadNet;
var text;
var walk;


//This is the object which runs the game.
function preload(){
  game.load.spritesheet('level1Fray', 'assets/NetFray.png', 64, 63.5);
  game.load.spritesheet('level1Break', 'assets/NetBreak.png', 64, 63.5);
  game.load.audio('sing-success', 'assets/sing-success.wav');
  game.load.audio('sing-failure', 'assets/sing-fail.wav');
  game.load.spritesheet('enemyAttack', 'assets/EnemyAttack.png', 57, 57);
  playerSprite = spritePlayers[Math.floor(Math.random() * spritePlayers.length)];
  var choseSprite = 'assets/' + playerSprite + ".png";
  game.load.spritesheet('player', choseSprite, 63, 64);
  game.load.spritesheet('enemy', 'assets/Net.png', 64, 63.5);
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
  PlayerAttack = new Attack(game)

  //Handle space bar press and call function on keyup
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(changingNet);

  //Create a Wave
  waveLevelNorm();
  waveBox();

  createCursor();
  animateCursor();

  // //Animate cursor
  // var tRect = game.add.tween(rect);
  // tRect.to({x: 500}, 5000, Phaser.Easing.Linear.None, true).loop('true');

  //Create profile box
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

function animateCursor(){
  var tRect = game.add.tween(rect);
  tRect.to({x: 500}, 5000, Phaser.Easing.Linear.None, true).loop('true');
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

function fireWeapon(){
  playerAttack = game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y - 370, 'attack');
  playerAttack.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  playerAttack.scale.setTo(10,30);
  playerAttack.animations.play('walk', 5, true);
}

function changingNet(){
  var value = SuperBadNet.sprite.key;
  if ((rect.x > 190 && rect.x < 210) ||
      (rect.x > 310 && rect.x < 330) ||
      (rect.x > 440 && rect.x < 460)) {
    fireWeapon();
    if (value === 'enemy'){
      SuperBadNet.takeDamage(100 * .5);
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Fray');
    }
    if (value === 'level1Fray'){
      SuperBadNet.takeDamage(50 * .5);
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Break');
      game.time.events.add(Phaser.Timer.SECOND * 2, kill, this);
    }
  }
  if ((rect.x > 120 && rect.x < 190) ||
      (rect.x > 210 && rect.x < 310) ||
      (rect.x > 330 && rect.x < 440) ||
      (rect.x > 460 && rect.x < 500)) {
    singGood.stop();
    GameHero.takeDamage(50);
    waveLevelMid();
    waveBox();
    createCursor();
    animateCursor();
    singBad.play();
    if(enemyAttack){
      GameHero.takeDamage(0);
      enemyAttack.kill();
    }
    enemyAttack = game.add.sprite(150, 80, 'enemyAttack');
    enemyAttack.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    enemyAttack.scale.setTo(1.5,4.5);
    enemyAttack.angle + 500;
    enemyAttack.animations.play('walk', 5, true);
    game.time.events.add(Phaser.Timer.SECOND * 2, killEnemyAttack, this);
  }
};

function update(){
  drawSin();
  handleAttack();

  //Controls the speed of the background waves
  background.tilePosition.x -= 2.5;
  playerAttack.x += 11;
};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
