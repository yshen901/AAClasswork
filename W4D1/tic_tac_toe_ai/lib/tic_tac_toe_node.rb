require_relative 'tic_tac_toe'
require "byebug"

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def losing_node?(evaluator)
    if board.over?
      return true if board.winner != evaluator && board.winner != nil
      return false
    end

    possible_moves = self.children
    if @next_mover_mark == evaluator #your turn
      result = possible_moves.all? { |move| move.losing_node?(evaluator) }
    else
      result = possible_moves.any? { |move| move.losing_node?(evaluator) }
    end
    result
  end

  def winning_node?(evaluator)
    if @board.over?
      return true if @board.winner == evaluator
      return false
    end
    
    possible_moves = self.children
    if evaluator == @next_mover_mark
      return possible_moves.any? { |move| move.winning_node?(evaluator) }
    else
      return possible_moves.all? { |move| move.winning_node?(evaluator) }
    end 
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    next_states = []
    @board.rows.each_with_index do |row, i|
      row.each_with_index do |col, j|
        pos = [i, j]
        if @board.empty?(pos)
          next_board = @board.dup
          next_board[pos] = @next_mover_mark
          @next_mover_mark == :x ? (next_mark = :o) : (next_mark = :x)
          next_states << TicTacToeNode.new(next_board, next_mark, pos)
        end
      end
    end
    next_states
  end

  def inspect 
    { board:@board.rows, next_turn:@next_mover_mark }
  end
end
