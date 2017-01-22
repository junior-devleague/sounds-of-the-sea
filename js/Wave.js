function waveLevelNorm(){
  var sinData = game.math.sinCosGenerator(GAME_WIDTH / 2, 30, 30, 6);
  sin = sinData.sin;
}

function waveLevelMid(){
  var sinData = game.math.sinCosGenerator(GAME_WIDTH / 2, 30, 30, 10);
  sin = sinData.sin;
}

function waveLevelHigh(){
  var sinData = game.math.sinCosGenerator(GAME_WIDTH / 2, 30, 30, 16);
  sin = sinData.sin;
}

function drawSin(){
  // // Draw sinData
  var gfx = game.add.graphics();
  gfx.lineStyle(3, 0x24efdc);
  for (var i = 0; i < sin.length; i ++) {
    gfx.lineTo(300 + i, 500 + sin[i]);
  }
};

