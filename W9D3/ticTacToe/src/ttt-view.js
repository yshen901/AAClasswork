class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    
    //Use $ to find a jQuery object
    //.on creates a listener essentially for everything within the scope of the jQuery object
    $(".game-board").on('click', (e) => {
      const square = e.target; //e.target is an HTML element, not a jQuery
      const pos = [square.id % 3, Math.floor(square.id / 3)];
      
      try {
        that.game.playMove(pos);
        that.makeMove($(square)); //use $ to convert an HTML element to a jQuery element
      }
      catch(MoveError){
        alert("Invalid move! Try again.");
      }

      if (this.game.isOver()) this.endGame();
    });
  }

  unbindEvents(){
    $(".game-board").unbind(); //removes the listener from the jQuery object
  }

  makeMove($square) {
    //Use .attr() to get the value of an attribute
    const pos = [$square.attr('id') % 3, Math.floor($square.attr('id') / 3)];
    $square.addClass(this.game.getMark(pos)); //removeClass() to do the opposite
  }

  endGame() {
    this.unbindEvents();
    this.$el.append("<h3>You win, " + this.game.winner() + "!</h3>");
    $(".ttt").addClass("gameover winner-" + this.game.winner());
  }

  setupBoard() {
    this.$el.append("<ul class='game-board'></ul>");
    let $gameBoard = $(".game-board");
    for (let i = 0; i < 9; i++){
      //adds element A to element B...potentially the other way doesn't work here w/ ($gameBoard).append
      $("<li class='ttt-square' id=" + i + "></li>").appendTo($gameBoard); 
    }
  }
}

module.exports = View;
