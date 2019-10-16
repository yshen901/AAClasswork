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

  makeMove($square) {
    const pos = [$square.attr('id') % 3, Math.floor($square.attr('id') / 3)];
    $("<p>" + this.game.board.getMark(pos) + "</p>").appendTo($square);
    $square.addClass('toggled');
  }

  endGame() {
    this.$el.append("<h3>You win, " + this.game.winner() + "!</h3>");
    let squares = Array.from($('.ttt-square'));

    let pos, mark, $square;
    let winner = this.game.winner();
    for(let i = 0; i < squares.length; i++){
      $square = $(squares[i]);
      pos = [squares[i].id % 3, Math.floor(squares[i].id / 3)];
      mark = this.game.board.getMark(pos);

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
