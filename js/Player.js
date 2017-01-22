class Player extends GameCharacter {
  constructor(game, xPos, yPos) {
    const HEALTH_BAR_XPOS = game.canvas.clientLeft + 20;
    const HEALTH_BAR_YPOS = 20;

    super(game, xPos, yPos, 'player');

    this.sprite.animations.add('moving', [0, 1, 2, 3]);
    this.sprite.animations.play('moving', 9, true);
    this.sprite.scale.setTo(2,2);

    //render health
    this.renderHealthBar(this.game, HEALTH_BAR_XPOS, HEALTH_BAR_YPOS);
  }
}
