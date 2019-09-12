require_relative "./pieces.rb"
require "set"

class WrongStartError < StandardError; end

class WrongEndError < StandardError; end

class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) {Array.new(8)}
    @sentinel = nil
    setup
  end

  def move_piece(start_pos, end_pos)
    unless self[start_pos].valid_moves.include?(end_pos)
      raise WrongEndError, "Invalid end position"
    end

    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
    self[end_pos].position = end_pos
    self[start_pos] = NullPiece.instance
  end

  def valid_start?(start_pos)
    raise WrongStartError, "No piece at start position" if self[start_pos].empty?
  end

  def valid_pos?(end_pos)
    y, x = end_pos
    x.between?(0, 7) && y.between?(0, 7)
  end

  # loop through all of opponent's valid moves, and see if king is covered
  def in_check?(color)

    king_pos = find_king(color)
    @rows.each do |row|
      row.each do |spot|
        if spot.color != color
          return true if spot.valid_moves.include?(king_pos)
        end
      end
    end
    false
  end

  # loop through all of the king's valid moves, and see if all of those moves
  # are covered by an opponent piece.
  def checkmate?(color)
    if in_check?(color)
      all_valid_moves = []
      @rows.each do |row|
        row.each do |spot|
          all_valid_moves.concat(spot.valid_moves) if spot.color != color
        end
      end

      king_pos = find_king
      valid_king_moves = self[king_pos].valid_moves
      valid_king_moves.all? do |king_move|
        all_valid_moves.include?(king_move)
      end
    end
  end

  def find_king(color)
    #return position of king piece of that color
    @rows.each do |row|
      row.each do |spot|
        return spot.position if spot.is_a?(King) && spot.color == color
      end
    end
    raise "Where did the king go? Dafeq?"
  end



  # gets the piece at the position
  def [](position)
    row, col = position
    @rows[row][col]
  end

  def []=(position, value)
    row, col = position
    @rows[row][col] = value
  end

  private
  def setup
    @rows = [
     [Rook.new(:B, [0,0], self),
      Knight.new(:B, [0,1], self),
      Bishop.new(:B, [0,2], self),
      Queen.new(:B, [0,3], self),
      King.new(:B, [0,4], self),
      Bishop.new(:B, [0,5], self),
      Knight.new(:B, [0,6], self),
      Rook.new(:B, [0,7], self)],

     [Pawn.new(:B, [1,0], self),
      Pawn.new(:B, [1,1], self),
      Pawn.new(:B, [1,2], self),
      Pawn.new(:B, [1,3], self),
      Pawn.new(:B, [1,4], self),
      Pawn.new(:B, [1,5], self),
      Pawn.new(:B, [1,6], self),
      Pawn.new(:B, [1,7], self)],

     [NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance],

     [NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance],

     [NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance],

     [NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance,
      NullPiece.instance],

     [Pawn.new(:W, [6,0], self),
      Pawn.new(:W, [6,1], self),
      Pawn.new(:W, [6,2], self),
      Pawn.new(:W, [6,3], self),
      Pawn.new(:W, [6,4], self),
      Pawn.new(:W, [6,5], self),
      Pawn.new(:W, [6,6], self),
      Pawn.new(:W, [6,7], self)],

     [Rook.new(:W, [7,0], self),
      Knight.new(:W, [7,1], self),
      Bishop.new(:W, [7,2], self),
      Queen.new(:W, [7,3], self),
      King.new(:W, [7,4], self),
      Bishop.new(:W, [7,5], self),
      Knight.new(:W, [7,6], self),
      Rook.new(:W, [7,7], self)]
    ]
  end
end

# board = Board.new

# rook_pos = [0,0]
# queen_pos = [0,3]
# bishop_pos = [0,2]
# king_pos = [0,4]
# knight_pos = [0,1]
# pawn_pos = [1,1]
# p board[knight_pos].valid_moves
# p board[rook_pos].valid_moves
# p board[queen_pos].valid_moves
# p board[bishop_pos].valid_moves
# p board[king_pos].valid_moves
# p board[pawn_pos].valid_moves

# board.move_piece([1,3], [3,3])
# render(board)

