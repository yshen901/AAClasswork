require "singleton"
require "byebug"

module Slideable
  #getter for HORIZONTAL_DIRS
  def horizontal_dirs
    HORIZONTAL_DIRS
  end

  #getter for DIAGONAL_DIRS
  def diagonal_dirs
    DIAGONAL_DIRS
  end

  #generates all possible moves using grow_unblocked_moves_in_dir(dx,dy)
  def moves
    all_moves = []
    directions = move_dirs
    directions.each do |direction|
      all_moves += grow_unblocked_moves_in_dir(*direction)
    end
    all_moves
  end

  private
  HORIZONTAL_DIRS = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  DIAGONAL_DIRS = [[-1, -1], [-1, 1], [1, -1], [1, 1]]

  #is overwritten - each piece has their own version that outputs directions
  def move_dirs; end

  #grows a line of moves in a direction until it hits a piece or the edge
  def grow_unblocked_moves_in_dir(dx, dy)
    #debugger
    dir_moves = []
    y, x = @position

    loop do
      x += dx
      y += dy
      case 
      when !on_board?([y, x])
        return dir_moves
      when empty_spot?([y, x])
        dir_moves << [y, x]
      when !enemy_piece?([y, x])
        return dir_moves
      when enemy_piece?([y, x])
        dir_moves << [y, x]
        return dir_moves
      end
    end
  end
end



module Stepable
  def moves
    y, x = @position
    diffs = move_diffs
    new_spots = diffs.map { |diff| [y + diff[0], x + diff[1]] }
    new_spots.select do |spot|
      on_board?(spot) && (enemy_piece?(spot) || empty_spot?(spot))
    end
  end

  private

  # array of differences
  def move_diffs; end

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
    symbol.to_s
  end

  def empty?
    self.is_a?(NullPiece)
  end

  def valid_moves
    moves
  end

  def on_board?(position)
    y, x = position
    x.between?(0, 7) && y.between?(0, 7)
  end

  def enemy_piece?(spot)
    @board[spot].color != self.color
  end

  def empty_spot?(spot)
    @board[spot].is_a?(NullPiece)
  end

  def symbol; end

  def inspect
    {self.symbol=>@color}
  end

  private

  def move_into_check?(end_pos)
  end
end

class Bishop < Piece
  include Slideable

  def symbol
    :Bp
  end

  def move_dirs
    diagonal_dirs
  end

end

class Rook < Piece
  include Slideable

  def symbol
    :Rk
  end

  def move_dirs
    horizontal_dirs
  end

end

class Queen < Piece
  include Slideable

  def symbol
    :Qu
  end

  def move_dirs
    horizontal_dirs + diagonal_dirs
  end

end

class Knight < Piece
  include Stepable

  def move_diffs
    combos = [-2,-1,1,2].permutation(2).to_a
    combos.select { |pair| pair[0].abs + pair[1].abs == 3}
  end

  def symbol
    :Kn
  end

end

class King < Piece
  include Stepable

  def move_diffs
    combos = [0,-1,-1,1,1,0].permutation(2).to_a
    combos.select { |pair| pair[0].abs + pair[1].abs != 0}.uniq
  end

  def symbol
    :Kg
  end

end

class Pawn < Piece

  def symbol
    :Pn
  end

  def moves
    possible_moves = []

    new_pos = forward_steps.map do |dir|
      [dir[0] + @position[0], dir[1] + @position[1]]
    end
    possible_moves << new_pos[0] if empty_spot?(new_pos[0])
    possible_moves << new_pos[1] if empty_spot?(new_pos[1]) && at_start_row?

    new_pos = side_attacks.map do |dir|
      [dir[0] + @position[0], dir[1] + @position[1]]
    end
    new_pos.each { |pos| possible_moves << pos if enemy_piece?(pos) && !empty_spot?(pos) }

    possible_moves
  end

  #returns an array of valid moves
  def move_dirs
    forward_steps + side_attacks
  end

  private
  #whether the pawn is still in its starting row
  def at_start_row?
    @position[0] == 1 && @color == :B || 
      @position[0] == 6 && @color == :W
  end

  #returns -1 or 1 depending on color
  def forward_dir
    @color == :B ? 1 : -1
  end

  #returns an array of valid forward steps
  def forward_steps
    [[forward_dir, 0], [2*forward_dir, 0]]
  end

  #returns an array of side directions
  def side_attacks
    [[forward_dir, 1], [forward_dir, -1]]
  end

end

class NullPiece < Piece
  include Singleton

  def initialize; end

  def moves; end

  def symbol
    :"--"
  end
end



