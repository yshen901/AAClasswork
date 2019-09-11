require_relative "./pieces.rb"
class Board

  attr_reader :rows

  def initialize
    @rows = Array.new(8) {Array.new(8)}
    @sentinel = nil
    setup
  end

  def move_piece(start_pos, end_pos)
    raise "No piece at start position" if self[start_pos].empty?
    unless self[start_pos].valid_moves.include?(end_pos)
      raise "Invalid end position"
    end

    self[end_pos], self[start_pos] = self[start_pos], self[end_pos]
    self[end_pos].position = end_pos
    self[start_pos] = NullPiece.instance
  end

  def valid_pos?(end_pos)
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

def render(board)
  print "  0  1  2  3  4  5  6  7"
  puts
  board.rows.each_with_index do |row, i| 
    print i.to_s + " "
    row.each do |spot|
      print spot.to_s + " "
    end
    puts
  end
  nil
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
