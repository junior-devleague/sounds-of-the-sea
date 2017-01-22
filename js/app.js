console.log(Phaser);
//This sets the variable for the spacebar.
var spaceKey;
var charge = 0;
var mouse;
var closeButton = game.make.sprite(pw, -ph, 'close');
    closeButton.inputEnabled = true;
    closeButton.input.priorityID = 1;
    closeButton.input.useHandCursor = true;
    closeButton.events.onInputDown.add(closeWindow, this);
var player;

var sin;

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

  // //Create a Wave
  waveLevelNorm();
};

// function openWindow() {

//     if ((tween !== null && tween.isRunning) || popup.scale.x === 1)
//     {
//         return;
//     }
    
//     //  Create a tween that will pop-open the window, but only if it's not already tweening or open
//     tween = game.add.tween(popup.scale).to( { x: 1, y: 1 }, 1000, Phaser.Easing.Elastic.Out, true);

// }

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
  useAbility();
  // // // Draw sinData
  // drawSin();

};
// function closeWindow() {

//     if (tween && tween.isRunning || popup.scale.x === 0.1)
//     {
//         return;
//     }

//     //  Create a tween that will close the window, but only if it's not already tweening or closed
//     tween = game.add.tween(popup.scale).to( { x: 0.1, y: 0.1 }, 500, Phaser.Easing.Elastic.In, true);

// }

var game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, 'gameDiv', { preload: preload, update: update, create: create });
