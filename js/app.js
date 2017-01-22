console.log(Phaser);
//This sets the variable for the spacebar.
var spaceKey;
var charge = 0;
var mouse;

var player;

//This sets the score to start at -1.
var score = -1;




var GAME_WIDTH = 800;
var GAME_HEIGHT = 600;
var GAME_CONTAINER_ID = 'gameDiv';

//This is the object which runs the game.
function preload(){
  game.load.spritesheet('player', 'assets/player.png', 55, 48);
  //game.load.image('enemy', 'assets/ship.png');
  game.load.spritesheet('enemy', 'assets/ship.png', 50, 45);

  game.load.image('background', 'assets/background-underwater.png');
};

function create(){

  //game.add.tileSprite(0, 0, 1000, 600, "background")

  game.add.image(44, 80, 'background');
  //Add player sprite to screen
  player = game.add.sprite(200, 300, 'player');
  //obstacle.scale.setTo(1,0.2);
  //obstacle.anchor.setTo(0,1);

  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //Add enemy sprite to screen
  enemy = game.add.sprite(400, 300, 'enemy');


  //obstacle.scale.setTo(1, 0.2);
  enemy.animations.add('moving', [3, 4, 5]);
  enemy.animations.play('moving', 5, true);

  player.animations.add('moving', [6, 7, 8]);
  player.animations.play('moving', 9, true);
  //obstacle.anchor.setTo(0,1);
};

function update(){
  if (spaceKey.isDown === true || charge <= 10) {
  console.log("hi")
  charge += 1;
  }
  if (spaceKey.isDown && charge >= 10) {
    charge -= 10
    function useAbility() {
    console.log('cow')

  }
  useAbility()
  }


};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });