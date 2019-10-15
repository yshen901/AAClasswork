// const Level = require('./level.js'); can't mix require and export
import Level from './level';
import Bird from './bird';
// import Pipe from './pipe';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
    // setInterval(this.animate(), 1000);
    this.score = 0;
    // var element = document.getElementById('testing');
    window.addEventListener('mousedown', this.click.bind(this));
  }

  animate () {
    if (this.level.collidesWith(this.bird.getBounds())) {
      this.running = false;
      console.log("collision");
      this.restart();
    }
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
    this.increaseScore();
    if (this.running) { //don't use while, as rAF calls it recursively
      //make sure to bind otherwise "this" in the called animate will be window
      requestAnimationFrame(this.animate.bind(this)); 
    }
  }

  increaseScore() {
    if (this.bird.x === this.level.pipes[0].x) {
      this.score += 1;
      console.log(this.score);
    }
  }

  restart () {
    this.running = false;
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }

  play() {
    this.running = true;
    this.animate();
  }
  
  click() {
    if (this.running) {
      this.bird.flap();
    } else {
      this.play();
    }
    
  }
}