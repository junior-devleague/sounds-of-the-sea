class HealthBar {
  constructor(game, xPos, yPos) {
    const BAR_WIDTH = 200;
    const BAR_HEIGHT = 25;
    const MAX_HEALTH = 100;

    //set instance props
    this.game = game;
    this.maxHealth = MAX_HEALTH;
    this.currentHealth = MAX_HEALTH;

    //create rectangle object
    this.healthBar = new Phaser.Rectangle(xPos, yPos, BAR_WIDTH, BAR_HEIGHT);

    //draw rectangle to canvas
    this.render();
  }

  render() {
    this.game.debug.geom(this.healthBar,'#0fffff');
  }
}
