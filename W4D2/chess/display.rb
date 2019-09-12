require "colorize"
require 'colorized_string'
require_relative "./board.rb"
require_relative "./cursor.rb"
String.disable_colorization = false 

class Display
  attr_reader :board, :cursor
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0,0], board)
  end

  def render
    system("clear")
    print "     0   1   2   3   4   5   6   7  "
    puts
    @board.rows.each_with_index do |row, i| 
      print " #{i} "
      row.each_with_index do |spot, j|
        background_color = :black
        piece_color = :light_black
        case 
        when [i, j] == @cursor.cursor_pos
          background_color = :yellow
        when spot.color == :W 
          piece_color = :white   
        end
        print " #{spot.to_s} ".colorize(:color => piece_color, :background => background_color)
      end

      puts
      print "   "
      puts "                                ".colorize(:color => :white, :background => :black)
    
    end
    nil
  end
end

String.colors                       # return array of all possible colors names

board = Board.new
display = Display.new(board)
loop do
  display.render
  if board.in_check?(:W)
    puts "White king is in check"
    if board.checkmate?(:W)
      #set game over
      puts "Checkmate, black player wins"
    end
  elsif board.in_check?(:B)
    puts "Black king is in check"
    if board.checkmate?(:B)
      #set game over
      puts "Checkmate, white player wins"
    end
  end


  start_pos = display.cursor.get_input
  if start_pos != nil
    begin
      display.board.valid_start?(start_pos)
      end_pos = nil
      while end_pos == nil
        end_pos = display.cursor.get_input
        display.render
      end
      display.board.move_piece(start_pos, end_pos)
    rescue WrongStartError
      puts "No piece there"
      puts "Pick another spot"
      sleep(2)
    rescue WrongEndError
      puts "Invalid end position"
      sleep(2)
    end
  end
end

