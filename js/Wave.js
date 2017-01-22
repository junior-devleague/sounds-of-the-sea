function waveLevelNorm(){
  var sinData = game.math.sinCosGenerator(380, 30, 30, 6);
  sin = sinData.sin;
}

function waveLevelMid(){
  var sinData = game.math.sinCosGenerator(380, 30, 30, 10);
  sin = sinData.sin;
}

function waveLevelHigh(){
  var sinData = game.math.sinCosGenerator(380, 30, 30, 16);
  sin = sinData.sin;
}

function drawSin(){
  // // Draw sinData
  var gfx = game.add.graphics(395, 500);
  gfx.lineStyle(3, 0x24efdc);
  for (var i = 0; i < sin.length; i ++) {
    gfx.lineTo(22 + i, 18 + sin[i]);

  }
};

//Create borders for waves
function waveBox(){
  var waveBox = game.add.graphics(100, 100);
  waveBox.beginFill(0x152131);
  waveBox.lineStyle(2, 0x173559, 1);
  waveBox.drawRect(293, 370, 405, 100);
  waveBox.endFill();

  var sonicBox = game.add.graphics(100, 100);
  sonicBox.beginFill(0x173559);
  sonicBox.lineStyle(2, 0x173559, 1);
  sonicBox.drawRect(293, 468, 405, 30);
  sonicBox.endFill();
  var text = "Sonic Wave";
  var style = { font: "24px Averia Serif Libre", fill: "#e4ecdd", align: "center" };
  var t = game.add.text(520, 570, text, style);
}

//Create profile box
function profileBox(){
  var profileBox = game.add.graphics(0, 5);
  profileBox.beginFill(0xf3faff);
  profileBox.lineStyle(2, 0x173559, 1);
  profileBox.drawRect(10, 5, 60, 55);
  profileBox.endFill();
  var spriteIndex = spritePlayers.indexOf(playerSprite);
  var text = spritePlayers[spriteIndex];
  if (text === 'GeneSharkman' || text === 'PlayerBoy'){
    prof = game.add.sprite(0, 5, 'profileB', 1);
  }else{
    prof = game.add.sprite(0, 0, 'profileF', 1);
  }
}

