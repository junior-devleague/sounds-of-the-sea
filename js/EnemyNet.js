class EnemyNet extends GameCharacter {
  constructor(game, xPos, yPos) {
    super(game, xPos, yPos, 'enemy');
    this.sprite.animations.add('moving', [3, 4, 5]);
    this.sprite.animations.play('moving', 5, true);
  }
}
