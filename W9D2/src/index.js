const GameView = require("./game_view.js");


// window.MovingObject = MovingObject;


window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const gameView = new GameView();
  gameView.start();
});