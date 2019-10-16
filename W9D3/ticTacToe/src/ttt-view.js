class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    
    $(".game-board").on('click', (e) => {
      const square = e.target;
      const pos = [square.id % 3, Math.floor(square.id / 3)];
      
      try {
        that.game.playMove(pos);
        that.makeMove($(square));
      }
      catch(MoveError){
        alert("Invalid move! Try again.");
      }

      if (this.game.isOver()) this.endGame();
    });
  }

  unbindEvents(){
    $(".game-board").unbind();
  }

  makeMove($square) {
    const pos = [$square.attr('id') % 3, Math.floor($square.attr('id') / 3)];
    $square.addClass(this.game.getMark(pos));
  }

  endGame() {
    this.unbindEvents();
    this.$el.append("<h3>You win, " + this.game.winner() + "!</h3>");
    
    let pos, mark, $square;
    let winner = this.game.winner();
    let squares = Array.from($('.ttt-square'));

    for(let i = 0; i < squares.length; i++){
      pos = [squares[i].id % 3, Math.floor(squares[i].id / 3)];
      mark = this.game.getMark(pos); //returns the mark from the array representation of the board
      $square = $(squares[i]);

      if (mark === winner)
        $square.addClass('winner');
      else
        $square.addClass('loser');

      $square.removeClass('hoverable');
    }
  }

  setupBoard() {
    this.$el.append("<ul class='game-board'></ul>");
    let $gameBoard = $(".game-board");
    for (let i = 0; i < 9; i++){
      $("<li class='ttt-square hoverable' id=" + i + "></li>").appendTo($gameBoard);
    }
  }
}

module.exports = View;
