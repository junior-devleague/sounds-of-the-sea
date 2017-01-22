class Player extends GameCharacter {
  constructor(game, xPos, yPos, name) {
    const HEALTH_BAR_XPOS = game.canvas.clientLeft + 171;
    const HEALTH_BAR_YPOS = 50;

    super(game, xPos, yPos, 'player');

    this.name = name;
    this.sprite.animations.add('moving');
    this.sprite.animations.play('moving', 9, true);
    this.sprite.scale.setTo(2,2);

    //render health
    this.renderHealthBar(this.game, HEALTH_BAR_XPOS, HEALTH_BAR_YPOS);
  }
}
