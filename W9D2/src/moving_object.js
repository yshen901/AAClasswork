/* this is ES6 syntax
import xxx from "..." //for importing other files

export default class MovingObject {
   // constructor (options){ } 
} 
*/

function MovingObject(options) {
  this.pos = options.pos; //[] also works
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];  

  this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function (otherObject) {
  pos1 = otherObject.pos;
  pos2 = this.pos;
  dist = Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  
  console.log(`dist=${dist}`);
  console.log(`radius=${otherObject.radius + this.radius}`);
  if (dist > otherObject.radius + this.radius) return false;
  return true //this.collideWith(otherObject);
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
  return true;
};

module.exports = MovingObject;