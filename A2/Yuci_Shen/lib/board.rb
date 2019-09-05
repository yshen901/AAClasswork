class Board
    attr_reader :max_height
    
    def self.build_stacks (num)
        Array.new(num) { Array.new }
    end

    def initialize (num_stacks, max_height)
        raise "rows and cols must be >= 4" if max_height < 4 || num_stacks < 4
        @max_height = max_height
        @stacks = Board.build_stacks(num_stacks)
    end

    def add (token, stack_index)
        return false if @stacks[stack_index].length >= self.max_height
        @stacks[stack_index] << token
        true
    end

    def vertical_winner? (token)
        @stacks.each do |stack|
            next if stack.length < self.max_height
            return true if stack.all? { |spot| spot == token }
        end
        false
    end

    def horizontal_winner? (token)
        (0...@stacks.length).each do |index|
            won = true
            @stacks.each do |stack|
                return false if stack[index] == nil #no more rows possible
                if stack[index] != token #this row is invalid
                    won = false
                    break
                end
            end
            return true if won
        end
        false
    end

    def winner? (token)
        horizontal_winner?(token) || vertical_winner?(token)
    end

    # This Board#print method is given for free and does not need to be modified
    # It is used to make your game playable.
    def print
        @stacks.each { |stack| p stack }
    end
end
