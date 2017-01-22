class EnemyNet extends GameCharacter {
  constructor(game, xPos, yPos) {
    const HEALTH_BAR_XPOS = game.canvas.clientWidth - 20 - 200;
    const HEALTH_BAR_YPOS = 20;

    super(game, xPos, yPos, 'enemy');
    this.sprite.animations.add('moving', [0, 1, 2, 3]);
    this.sprite.animations.play('moving', 5, true);
    this.sprite.scale.setTo(4,4);

    //render health
    this.renderHealthBar(this.game, HEALTH_BAR_XPOS, HEALTH_BAR_YPOS);
  }
  removeCharacter(){
    this.sprite.destory();
  }

}
