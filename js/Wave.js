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
  var gfx = game.add.graphics(366, 500);
  gfx.lineStyle(3, 0x24efdc);
  for (var i = 0; i < sin.length; i ++) {
    // gfx.lineTo(368 + i, 500 + sin[i]);
    gfx.lineTo(22 + i, sin[i]);

  }
};

//Create borders for waves
function waveBox(){
  var waveBox = game.add.graphics(100, 100);
  waveBox.beginFill(0xf3faff);
  waveBox.lineStyle(2, 0x000000, 1);
  waveBox.drawRect(265, 350, 405, 100);
  waveBox.endFill();
}

