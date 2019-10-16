const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js");

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.NUM_ASTEROIDS = 10;

  this.asteroids = [];
  this.addAsteroids();

  this.ship = new Ship({pos: this.randomPosition(), game: this });
  this.bullets = [];

  let that = this;
  this.img = new Image();
  this.img.onload = function () {
    that.ctx.drawImage(that.img, 0, 0, 600, 900);
  };
  this.img.src = "../assets/Youngjun_Na.jpg";
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++){
    let pos = this.randomPosition();
    let options = {pos: pos, game: this};
    this.asteroids.push(new Asteroid(options));
  }
};

Game.prototype.addBullet = function(bullet) {
  this.bullets.push(bullet);
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]).concat(this.bullets);
};

Game.prototype.randomPosition = function() {
  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
};

Game.prototype.drawBackground = function() {
  this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.ctx.fillStyle = "skyblue";
  this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  
  for(let i = 0; i < 6; i++)
    for(let j = 0; j < 6; j++)
      this.ctx.drawImage(this.img, i*100, j*150, 100, 150);
  this.ctx.drawImage(this.img, 100, 150, 400, 600);
};

Game.prototype.draw = function() {   
  this.drawBackground();
  let objects = this.allObjects();
  for (let i = 0; i < objects.length; i++)
    objects[i].draw(this.ctx);
};

Game.prototype.step = function() {
  this.checkCollisions();
  this.moveObjects();
};

Game.prototype.moveObjects = function() {
  let objects = this.allObjects();
  for (let i = 0; i < objects.length; i++)
    objects[i].move();
};

Game.prototype.checkCollisions = function() {
  let objects = this.allObjects();
  for (let i = 0; i < objects.length; i++)
    for (let j = i + 1; j < objects.length; j++)
      if (objects[i].isCollidedWith(objects[j]))
        objects[i].collideWith(objects[j]);
};

Game.prototype.wrap = function(pos) {
  if (pos[0] > 640) pos[0] %= 640;
  if (pos[1] > 640) pos[1] %= 640;

  if (pos[0] < 0) pos[0] += 640;
  if (pos[1] < 0) pos[1] += 640;
};

Game.prototype.remove = function (asteroid) {
  let newArr = [];
  for (let i = 0; i < this.asteroids.length; i++)
    if (this.asteroids[i] != asteroid) 
      newArr.push(this.asteroids[i]);
  this.asteroids = newArr;
};

Game.prototype.isOutOfBounds = function(pos) {
  return (pos[0] > 640) || (pos[1] > 640) || (pos[0] < 0) || (pos[1] < 0);
};

module.exports = Game;