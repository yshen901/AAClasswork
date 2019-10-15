const CONSTANTS = {
  GRAVITY: 3,
  FLAP_SPEED: -8,
  TERMINAL_VEL: 12,
  BIRD_WIDTH: 40,
  BIRD_HEIGHT: 30
};

export default class Bird {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.velocity = 0;
    this.x = this.dimensions.width/3; //use .width instead of [width]??
    this.y = this.dimensions.height/2;
  }

  drawBird(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(this.x-20,this.y-15,CONSTANTS.BIRD_WIDTH,CONSTANTS.BIRD_HEIGHT);
  }

  animate(ctx) {
    this.move();
    this.drawBird(ctx);
  }

  move() {
    // this.y += 0.0001*this.velocity;
    this.velocity += this.y; 
    this.y += CONSTANTS.GRAVITY;
  }

  flap() {
    console.log("Flapping");
    this.y += -50;
    this.velocity = CONSTANTS.FLAP_SPEED;
  }

  getBounds() {
    return [[this.x-20,this.y-15],[this.x+20,this.y+15]];
  }

}