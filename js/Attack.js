
class Attack {
  constructor(game) {
  const ATTACK_SPEED = 25;
    this.group = game.add.group();
    this.attackSpeed = ATTACK_SPEED;
  }

  fireWeapon(sprite){
    this.group.add(sprite);
    this.group.callAll('animations.add', 'animations', 'moving', [0, 1, 2, 3], 1, true);
    this.group.callAll('animations.play', 'animations', 'moving');
    this.group.scale.set(1, 1);
  }
  animateFire(){
    this.group.children.forEach( attack => attack.x += this.attackSpeed);
  }
}
