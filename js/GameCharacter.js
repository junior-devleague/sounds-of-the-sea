class GameCharacter {
  constructor(game, xPos, yPos, type) {
    this.game = game;
    this.health;
    this.hits;
    this.name;
    this.healthBarConfig = {
      width: 200,
      height: 30,
      bg: {
        color: '#651828'
      },
      bar: {
        color: '#FEFF03'
      },
      animationDuration: 200
    };

    this.healthBarTextConfig = { font: "24px Arial", fill: "#ff0044", align: "left"};
    this.healthBarText;
    this.sprite = game.add.sprite(xPos, yPos, type);
  }

  renderHealthBar(game, xPos, yPos) {
    this.healthBarConfig.x = xPos;
    this.healthBarConfig.y = yPos;
    this.healthBar = new HealthBar(game, this.healthBarConfig);

    this.healthBarText = game.add.text(xPos-50, yPos + 20, this.name, this.healthBarTextConfig);
  }

  takeDamage(damage) {
    this.healthBar.setPercent(damage);
  }
}
