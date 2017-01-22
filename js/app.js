console.log(Phaser);
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
  game.load.spritesheet('attack', 'assets/attack.png', 32, 32);
};

function create(){
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
  GameHero = new Player(game, 300, 500);
  SuperBadNet = new EnemyNet(game, 500, 100);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  spaceKey.onUp.add(useAbility);

  game.add.image(44, 80, 'background');

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

  //  And play them
  //attack.callAll('animations.add', 'animations', 'moving', [0, 1, 2, 3], 10, true);
  //attack.callAll('animations.play', 'animations', 'moving');

  text = game.add.sprite(200, 200, 'text');

  //  The frequency (4) = the number of waves
  var data = game.math.sinCosGenerator(800, 200, 1, 4);
};




function update(){
  if (spaceKey.isDown === true || charge <= 10) {
    // console.log("hi")

function useAbility() {
  // console.log('cow');
  attack.add(game.add.sprite(GameHero.x, GameHero.y, 'attack', 7));
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
    setInterval(function(){player = game.add.sprite(900, 300, 'player');},3);
    charge -= 10
    function useAbility() {
      console.log('cow')

    }

};


function useAbility() {
  console.log('cow');
}
  drawSin();
  handleAttack();
};

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
