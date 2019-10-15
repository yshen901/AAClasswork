Function.prototype.inherits = function(parentObject) {
  //arrow operator persists this context, function() makes a completely new context
  //"this" refers to the function itself.
  let Surrogate = function() {}; //constructor
  Surrogate.prototype = parentObject.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};



function MovingObject() { }
MovingObject.prototype.tester = function() {
  console.log("inherited");
};

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);


//
let ship = new Ship();
ship.tester();
console.log(ship.__proto__);

Function.prototype.inherits2 = function (parentObject) {
  //arrow operator persists this context, function() makes a completely new context
  //"this" refers to the function itself.
  this.prototype = Object.create(parentObject.prototype);
  this.prototype.constructor = this;
};