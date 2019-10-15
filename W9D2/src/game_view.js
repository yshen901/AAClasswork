const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");

function GameView() {
  this.canvas = document.getElementById("game-canvas");
  this.ctx = this.canvas.getContext("2d");
  this.game = new Game(this.canvas);
}

GameView.prototype.start = function () {
  let that = this;
  setInterval( function () { that.game.draw(); that.game.step(); }, 10);
};

module.exports = GameView;

