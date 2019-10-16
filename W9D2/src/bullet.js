const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");

function Bullet(options) {
  this.COLOR = "blue";
  this.RADIUS = 3;
  let super_options = {
    pos: options.pos,
    vel: options.vel,
    radius: this.RADIUS,
    color: this.COLOR,
    game: options.game
  };
  // call's arguments doesn't have to be array or element, it just pointer, 
  //        eg: pointer to hash arg, or any other data type
  MovingObject.call(this, super_options);
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.collideWith = function(otherObject) {
  //Q: Why must we add a Bullet case to avoid Bullet-Bullet collision cases?
  //   Without this case, we get the error: 
  //     Uncaught TypeError: Right-hand side of 'instanceof' is not callable
  if (otherObject instanceof Bullet){
    console.log("hit a bullet");
  } else if (otherObject instanceof Asteroid) {
    this.game.remove(otherObject);
    console.log("hit an asteroid");
  } else {
    console.log("hit a ship");
  }
};

Bullet.prototype.isWrappable = function () { return false; };

module.exports = Bullet;
