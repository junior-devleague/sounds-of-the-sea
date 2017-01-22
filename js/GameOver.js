function gameOver(){
  game.stage.backgroundColor = "#000000";
  var endTextBox = game.add.graphics(100, 100);
  var endText = "GAME OVER! \n Enjoy your marine park entertainment.";
  var style = { font: "32px Arial Black", fill: "#ffffff", align: "center"};
  var text = game.add.text(50, 160, endText, style);
};