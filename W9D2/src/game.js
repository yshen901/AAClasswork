const Asteroid = require("./asteroid.js");

function Game(canvas) {
  this.ctx = canvas.getContext("2d");
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.NUM_ASTEROIDS = 4;

  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++){
    let pos = this.randomPosition();
    let options = {pos: pos, game: this};
    this.asteroids.push(new Asteroid(options));
  }
};

Game.prototype.randomPosition = function() {
  return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y];
};

Game.prototype.drawBackground = function() {
  this.ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.ctx.fillStyle = "skyblue";
  this.ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
};

Game.prototype.draw = function() {
  this.drawBackground();
  for (let i = 0; i < this.asteroids.length; i++)
    this.asteroids[i].draw(this.ctx);
};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.asteroids.length; i++)
    this.asteroids[i].move();
};

Game.prototype.wrap = function(pos) {
  if (pos[0] > 640) pos[0] %= 640;
  if (pos[1] > 640) pos[1] %= 640;

  if (pos[0] < 0) pos[0] += 640;
  if (pos[1] < 0) pos[1] += 640;
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++)
    for (let j = i + 1; j < this.asteroids.length; j++)
      if (this.asteroids[i].isCollidedWith(this.asteroids[j]))
        this.asteroids[i].collideWith(this.asteroids[j]);
};

Game.prototype.step = function() {
  this.checkCollisions();
  this.moveObjects();
};

Game.prototype.remove = function (asteroid) {
  let newArr = [];
  for (let i = 0; i < this.asteroids.length; i++)
    if (this.asteroids[i] != asteroid) 
      newArr.push(this.asteroids[i]);
  this.asteroids = newArr;
};

module.exports = Game;