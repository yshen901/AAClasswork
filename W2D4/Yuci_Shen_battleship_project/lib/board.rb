class Board
    attr_reader :size

    def self.print_grid(grid)
        grid.each { |row| puts row.join(' ') }
    end
    
    def initialize (n)
        @grid = Array.new(n) { Array.new(n, :N) }
        @size = n*n
    end

    def [](coords)
        @grid[coords[0]][coords[1]]
    end

    def []=(coords, value)
        @grid[coords[0]][coords[1]] = value
    end

    def num_ships
        count = 0
        @grid.each { |row| count += row.count(:S) }
        count
    end

    def attack(position)
        if self.[](position) == :S
            puts 'you sunk my battleship!'
            self.[]=(position, :H)
            return true
        end
        self.[]=(position, :X)
        false
    end

    def place_random_ships
        n = @grid.length
        coordinates = (0...n*n).to_a.sample(@size/4)
        coordinates.each { |coords| self.[]=([coords/n, coords%n], :S)}
    end

    def hidden_ships_grid
        @grid.map { |row| row.map { |spot| spot == :S ? :N : spot } }
    end

    def cheat
        Board.print_grid(@grid)
    end

    def print
        Board.print_grid(self.hidden_ships_grid)
    end

end
