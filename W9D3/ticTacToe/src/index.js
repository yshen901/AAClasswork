const View = require("./ttt-view.js");
const Game = require("../nodeSolution/game.js");

  $(() => {
    let container = $(".ttt");
    const game = new Game();
    const view = new View(game, container);
    
  });
