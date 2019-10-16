const Game = require("./game.js");

function GameView() {
  this.canvas = document.getElementById("game-canvas");
  this.ctx = this.canvas.getContext("2d");
  this.game = new Game(this.canvas);
}

GameView.prototype.start = function () {
  let that = this;
  setInterval( function () { that.game.draw(); that.game.step(); }, 10);
  this.bindKeyHandlers();
};


//Steal the keymaster.js from the github, add a script tag to 
//index.html above main.js, then use key(...) to bind keys!
GameView.prototype.bindKeyHandlers = function() {
  let that = this;
  key('a', function () { that.game.ship.power([-1, 0]); console.log("A");});
  key('d', function () { that.game.ship.power([1, 0]); });
  key('w', function () { that.game.ship.power([0, -1]); console.log("W");});
  key('s', function () { that.game.ship.power([0, 1]); });
  key('b', function () { that.game.ship.vel = [0, 0]; });
  key('t', function () { that.game.ship.relocate(); });
  key('k', function () { that.game.ship.fireBullet(); });

};

module.exports = GameView;

