class GameCharacter {
  constructor(game, xPos, yPos, type) {
    this.game = game;
    this.health;
    this.hits;
    this.sprite = game.add.sprite(xPos, yPos, type);
  }

  renderHealthBar(game, xPos, yPos) {
    this.healthBar = new HealthBar(game, xPos, yPos);

  }
  changeNet(xPos, yPos, type){
    this.sprite = game.add.sprite(xPos, yPos, type);
    this.sprite.animations.add('moving', [0, 1, 2, 3]);
    this.sprite.animations.play('moving', 5, true);
    this.sprite.scale.setTo(4,4);
  }
}
