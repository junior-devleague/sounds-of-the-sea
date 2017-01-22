class Player extends GameCharacter {
  constructor(game, xPos, yPos) {
    super(game, xPos, yPos, 'player');
    this.sprite.animations.add('moving', [6, 7, 8]);
    this.sprite.animations.play('moving', 9, true);
    this.sprite.scale.setTo(2,2);
  }
}
