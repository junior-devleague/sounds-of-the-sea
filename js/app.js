//This sets the variable for the spacebar.
var PlayerAttack;
var attackBullets;
var enemyAttack;
var attack_speed = 6;
var spaceKey;
var charge = 0;
var mouse;
var charge;
var text;
var sin;
var rect;
var walk;
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
  game.load.spritesheet('player', 'assets/Player2Simple.png', 63.5, 64);
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
  spaceKey.onUp.add(changingNet);

  PlayerAttack = new Attack(game)
  music = game.add.audio('startMusic');
  music.play();

  singGood = game.add.audio('sing-success');
  singBad = game.add.audio('sing-failure');
  //Create a Wave
  waveLevelNorm();
  waveBox();

  //Create a cursor
  rect = game.add.graphics(100, 100);
  rect.beginFill(0xd0d0d0);
  rect.lineStyle(2, 0xd0d0d0, 1);
  rect.drawRect(285, 392, 3, 96);
  rect.endFill();

  //Animate cursor
  var tRect = game.add.tween(rect);
  tRect.to({x: 500}, 5000, Phaser.Easing.Linear.None, true).loop('true');

  //Create profile box
  profileBox();

};

function handleAttack(){
  PlayerAttack.animateFire();
};

function useAbility() {
  attack.add(game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y + 55, 'attack', 7));
};

function kill(){
  SuperBadNet.sprite.kill();
  singGood.play();
};

function killEnemyAttack(){
  enemyAttack.kill();
};

function changingNet(){
  var value = SuperBadNet.sprite.key;
  if ((rect.x > 190 && rect.x < 210) ||
      (rect.x > 310 && rect.x < 330) ||
      (rect.x > 440 && rect.x < 460)) {
    PlayerAttack.fireWeapon(game.add.sprite(GameHero.sprite.x + 100, GameHero.sprite.y + 55, 'attack', 1));
    SuperBadNet.takeDamage(30);
    if (value === 'enemy'){
      SuperBadNet.sprite.kill();
      SuperBadNet.changeNet(500, 150, 'level1Fray');
    }
    if (value === 'level1Fray'){
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
    singBad.play();
    GameHero.takeDamage(5);
    if(enemyAttack){
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
};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
