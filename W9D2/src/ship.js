const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Bullet = require("./bullet.js");

let Ship = function(options) {
  this.COLOR = "red";
  this.RADIUS = 15;
  let super_options = {
    pos: options.pos,
    vel: [0, 0],
    radius: this.RADIUS,
    color: this.COLOR,
    game: options.game
  };
  // call's arguments doesn't have to be array or element, it just pointer, 
  //        eg: pointer to hash arg, or any other data type
  MovingObject.call(this, super_options);
};

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0, 0];
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  //must use [...arr] here otherwise the bullet's pos/vec array will be the same
  //    array as the ship's pos/vec array
  const bullet = new Bullet({pos: [...this.pos], vel: [...this.vel], game: this.game});
  this.game.addBullet(bullet);
};

module.exports = Ship;

