import Pipe from "./pipe";

export default class Level {
  constructor(dimensions) {
    this.dimensions = dimensions;
    this.pipes = [new Pipe(dimensions, 500), new Pipe(dimensions,800), 
      new Pipe(dimensions,1100)];
  }

  drawBackground(ctx) {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }


  drawPipes(ctx){
    for (let i = 0; i < this.pipes.length; i++){
      ctx.fillStyle = "green";
      ctx.fillRect(this.pipes[i].x, 0, 100, this.pipes[i].top);
      ctx.fillRect(this.pipes[i].x, this.pipes[i].bottomY, 100, this.pipes[i].bottom);
    }
  }

  movePipes() {
    for (let i = 0; i < this.pipes.length; i++) {
      this.pipes[i].move();
    }
  }

  destroyPipe(){
    if (this.pipes[0].x < -100) {
      this.pipes.shift();
      let new_x = this.pipes[this.pipes.length-1].x + 300
      this.pipes.push(new Pipe(this.dimensions,new_x));
    }
  }

// bounds = [[this.x-20,this.y-15],[this.x+20,this.y+15]];
  collidesWith(bounds) {
    let pipe = null;
    for (let i = 0; i < this.pipes.length; i++) {
      pipe = this.pipes[i];
      
      if (bounds[0][0] > pipe.x + 100 || bounds[1][0] < pipe.x) {
        return false;
      }
      if (bounds[0][1] > pipe.top && bounds[1][1] < pipe.bottomY) {
        return false;
      }
      return true;
    }
  }


  animate(ctx) {
    this.drawBackground(ctx);
    this.movePipes();
    this.destroyPipe();
    this.drawPipes(ctx);
  }
}

