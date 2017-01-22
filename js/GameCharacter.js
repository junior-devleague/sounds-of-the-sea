class GameCharacter {
  constructor(game, xPos, yPos, type) {
    this.health = 0;
    this.hits = 0;
    this.sprite = game.add.sprite(xPos, yPos, type);
  }
}
