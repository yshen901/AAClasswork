export default class Pipe {
  constructor(dimensions, initialX) {
    this.x = initialX;
    this.top = 100 + Math.random() * 300;
    this.bottomY = this.top + 150;
    this.bottom = dimensions.height - this.bottomY;
  }

  move() {
    this.x -= 5;
  }
}