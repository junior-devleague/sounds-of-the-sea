class EnemyNet extends GameCharacter {
  constructor(game, xPos, yPos) {
    const HEALTH_BAR_XPOS = game.canvas.clientWidth - 20 - 88;
    const HEALTH_BAR_YPOS = 50;

    super(game, xPos, yPos, 'enemy');

    this.name = 'Human Nets';
    this.sprite.animations.add('moving');
    this.sprite.animations.play('moving', 5, true);
    this.sprite.scale.setTo(4,4);

    //render health
    this.renderHealthBar(this.game, HEALTH_BAR_XPOS, HEALTH_BAR_YPOS);
  }
  removeCharacter(){
    this.sprite.destory();
  }
}
