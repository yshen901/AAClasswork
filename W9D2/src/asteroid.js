const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");
const Util = require("./util.js");


function Asteroid(options) {
  this.COLOR = "black";
  this.RADIUS = 10; 
  let super_options = {
    pos: options.pos, 
    vel: Util.randomVec(Math.random() * 10), 
    radius: this.RADIUS, 
    color: this.COLOR, 
    game: options.game
  };
  // call's arguments doesn't have to be array or element, it just pointer, 
  //        eg: pointer to hash arg, or any other data type
  MovingObject.call(this, super_options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  } else if (otherObject instanceof Asteroid){
    this.game.remove(otherObject);
    this.game.remove(this);    
  }
};

module.exports = Asteroid;