class GameCharacter {
  constructor(game, xPos, yPos, type) {
    this.game = game;
    this.health;
    this.hits;
    this.sprite = game.add.sprite(xPos, yPos, type);
  }

  renderHealthBar(game, xPos, yPos) {
    this.healthBar = new HealthBar(game, {x: xPos, y: yPos});
  }

  takeDamage(damage) {
    this.healthBar.setPercent(1);
  }
}
