let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  const arr = [];
  for (let i = 0; i < 8; i++){
    arr.push(new Array(8));
    //arr[i] = new Array(8) //also works
  }

  arr[3][4] = new Piece("black");
  arr[4][3] = new Piece("black");

  arr[3][3] = new Piece("white");
  arr[4][4] = new Piece("white");

  return arr;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  // if (pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7)
  //   throw "Invalid Position";
  return this.grid[pos[0]][pos[1]];
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length != 0;
};

/**
 * Checks if the piece at a given positio
 * matches a given color. [x, y]
 */
Board.prototype.isMine = function (pos, color) {
  if (this.getPiece(pos) === undefined) return false;
  return this.getPiece(pos).color === color;
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece(pos) === undefined) return false;
  return true;
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return !this.hasMove("white") && !this.hasMove("black");
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7);
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];

  if (!board.isValidPos(nextPos) || !board.isOccupied(nextPos))
    return null;

  if (board.isMine(nextPos, color)) {
    if (piecesToFlip.length === 0) return null;
    return piecesToFlip;
  }

  piecesToFlip.push(board.getPiece(nextPos));
  return _positionsToFlip(board, nextPos, color, dir, piecesToFlip);
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color))
    throw Error('Invalid Move');

  let toFlip = [];
  for (let i=0; i<8; i++) {
    let pieces = _positionsToFlip(this, pos, color, Board.DIRS[i], []);
    if (pieces) toFlip = toFlip.concat(pieces);
  }

  for (let i=0;i<toFlip.length;i++)
    toFlip[i].flip();

  this.grid[pos[0]][pos[1]] = new Piece(color);

};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  if (this.isOccupied(pos)) return false;
  
  for (let i = 0; i < 8; i++){
    const array = _positionsToFlip(this, pos, color, Board.DIRS[i], []);
    if (array != null) return true;
  }
  return false;
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let arr = [];
  for (let i = 0; i < 8; i++){ //ALWAYS USE LET!!!!
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i, j], color)) 
        arr.push([i, j]);
    }
  }
  return arr;
};

module.exports = Board;
