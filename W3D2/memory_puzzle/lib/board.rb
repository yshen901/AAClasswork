require_relative "card.rb"

class Board
    attr_reader :size
    def initialize(size)
        raise "Size must be even." if size.odd?
        raise "Size must not be greater than 10." if size > 10

        @size = size
        @grid = Array.new(size) { Array.new(size) }
    end

    #generates the all of the pairs needed to populate the board
    def generate_pairs
        num_pairs = @size ** 2 / 2
        pairs = [*("A".."Z"),*('a'..'z')].sample(num_pairs)
        pairs.concat(pairs.clone)
        pairs.shuffle!
    end

    #populates the board grid with random pairs of alphabet charcters
    def populate
        pairs = self.generate_pairs
        pairs.each_with_index do |ele, i| 
            self[ [i / @size, i % @size] ] = Card.new(ele)
        end
    end

    #prints out the grid with only the face-up card values
    def render
        puts "  #{(0...@size).to_a.join(" ")}"
        @grid.each_with_index do |row, i| 
            puts "#{i.to_s} #{row.map{ |card| card.to_s }.join(" ")}"
        end
    end

    #prints out the grid with all of the card values
    def render_all
        puts "  #{(0...@size).to_a.join(" ")}"
        @grid.each_with_index do |row, i| 
            puts "#{i.to_s} #{row.map{ |card| card.face_value.to_s }.join(" ")}"
        end
    end

    #returns whether all of the cards are revealed
    def won?
        @grid.all? do |row| 
            row.all? { |card| card.face_up }
        end
    end

    #reveals the card at a position in the grid
    #returns the card
    def reveal(guessed_pos)
        self[guessed_pos].reveal unless self[guessed_pos].face_up
        self[guessed_pos]
    end

    #gets the value at a position in grid
    def [](pos)
        row, col = pos
        @grid[row][col]
    end

    #sets the value at a position in grid
    def []=(pos, value)
        row, col = pos
        @grid[row][col] = value
    end
end
