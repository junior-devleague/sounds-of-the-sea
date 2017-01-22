function gameOver(){
  game.stage.backgroundColor = "#000000";
  var endTextBox = game.add.graphics(100, 100);
  var endText = "GAME OVER! \n Enjoy your marine park entertainment.";
  var style = { font: "32px Averia Serif Libre", fill: "#ffffff", align: "center"};
  var text = game.add.text(50, 160, endText, style);
  humanTalk();
};

function humanTalk(){
  var talkBubble = game.add.graphics(400, 0);
  talkBubble.beginFill(0xffffff);
  talkBubble.lineStyle(2, 0x000000, 1);
  talkBubble.drawEllipse(100, 40, 80, 50);
  talkBubble.endFill();

  var humanTextBox = game.add.graphics(400, 100);
  var humanText = "You're going to a \n marine life park!!!";
  var style = { font: "14px Arial", fill: "#000000", align: "center"};
  var text = game.add.text(445, 20, humanText, style);
}