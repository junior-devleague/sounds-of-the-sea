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
  waveBox.beginFill(0xf3faff);
  waveBox.lineStyle(2, 0x000000, 1);
  waveBox.drawRect(293, 370, 405, 100);
  waveBox.endFill();

  var sonicBox = game.add.graphics(100, 100);
  sonicBox.beginFill(0x000000);
  sonicBox.lineStyle(2, 0x000000, 1);
  sonicBox.drawRect(293, 468, 405, 30);
  sonicBox.endFill();
  var text = "Sonic Wave";
  var style = { font: "24px Arial Black", fill: "#ffffff", align: "center" };
  var t = game.add.text(520, 570, text, style);
}

//Create profile box
function profileBox(){
  var profileBox = game.add.graphics(0, 5);
  profileBox.beginFill(0xf3faff);
  profileBox.lineStyle(2, 0x000000, 1);
  profileBox.drawRect(10, 5, 60, 55);
  profileBox.endFill();
  var spriteIndex = spritePlayers.indexOf(playerSprite);
  var text = spritePlayers[spriteIndex];
  console.log(text);
  if (text === "Lura"){
    prof = game.add.sprite(-12, -11, 'profile', 1);
    prof.scale.setTo(1.3,1.3);
  }
  if (text === "Christie") {
    prof = game.add.sprite(-12, -7, 'profile', 1);
    prof.scale.setTo(1.3,1.3);
  }
  if (text === "Aohmsen") {
    prof = game.add.sprite(-7, 4, 'sharkboy', 1);
    prof.scale.setTo(1.3,1.3);
  }
  if (text === "Sheena") {
    prof = game.add.sprite(-13, -10, 'profile', 1);
    prof.scale.setTo(1.3,1.3);
  }
  if (text === "Nat"){
    prof = game.add.sprite(-8, -6, 'profile', 1);
    prof.scale.setTo(1.2,1.2);
  }
  // if (text === "Lura"){
  //   prof = game.add.sprite(-10, -9, 'profile', 1);
  //   prof.scale.setTo(1.3,1.3);
  // }
  if (text === "Player3"){
    console.log("hi");
  }
  //prof = game.add.sprite(0, 0, 'profile', 1);
  // prof.scale.setTo(1.3,1.3);
}

