const BAR_WIDTH = 200;
const BAR_HEIGHT = 25;
const MAX_HEALTH = 100;

class HealthBar {
  constructor(game, xPos, yPos) {

    //set instance props
    this.game = game;
    this.maxHealth = MAX_HEALTH;
    this.currentHealth = MAX_HEALTH;
    this.xPos = xPos;
    this.yPos = yPos;

    //create rectangle object
    this.healthBar = new Phaser.Rectangle(xPos, yPos, BAR_WIDTH, BAR_HEIGHT);

    //draw rectangle to canvas
    this.render();
  }

  showDamage(damageAmount){
    this.currentHealth -= damageAmount;
    let width = BAR_WIDTH * (this.currentHealth / MAX_HEALTH);
  }

  render() {
    this.game.debug.geom(this.healthBar,'#0fffff');
  }
}
