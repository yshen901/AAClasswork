require "singleton"

module Slideable
  def horizontal_dirs
  end

  def diagonal_dirs
  end

  def moves
  end

  private
  HORIZONTAL_DIRS = []
  DIAGONAL_DIRS = []

  def move_dirs; end

  def grow_unblocked_moves_in_dir(dx, dy)
  end
end

module Stepable
  def moves
  end

  private
  def move_dirs; end
end

class Piece
  attr_reader :color, :board
  attr_accessor :position

  def initialize(color, position, board)
    @color = color
    @position = position
    @board = board
  end

  def to_s
  end

  def empty?
  end

  def valid_moves
  end

  def symbol
  end

  def moves; end

  private
  def move_into_check?(end_pos)
  end
end

class Bishop < Piece
  include Slideable

  def inspect
    {"Bp"=>@color}
  end
end

class Rook < Piece
  include Slideable

  def inspect
    {"Rk"=>@color}
  end
end

class Queen < Piece
  include Slideable

  def inspect
    {"Qu"=>@color}
  end
end

class Knight < Piece
  include Stepable

  def inspect
    {"Kn"=>@color}
  end
end

class King < Piece
  include Stepable

  def inspect
    {"Kg"=>@color}
  end
end

class Pawn < Piece

  def inspect
    {"Pn"=>@color}
  end
end

class NullPiece < Piece
  include Singleton

  def initialize
  end

  def moves
  end

  def symbol
  end

  def inspect 
    {"  "=>:N}
  end

end