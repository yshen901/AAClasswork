require_relative "../polytree/lib/00_tree_node.rb"

class KnightPathFinder
    def self.valid_moves(pos) #returns array of possible positions to move to
        x, y = pos
        moves = [
            [x-1, y-2], [x-1, y+2], 
            [x+1, y-2], [x-1, y+2],
            [x-2, y-1], [x-2, y+1], 
            [x+2, y-1], [x+2, y+1]
        ]

        moves.select do |move|
            move[0].between(0,7) && move[1].between(0,7)
        end
    end
    # if move[0] == (0..7).

    def initialize(initial_pos)
        @start_pos = PolyTreeNode.new(initial_pos)
        @considered_positions = []
    end

    def new_move_positions(pos)
        valid = KnightPathFinder.valid_moves(pos)
        new_pos = valid.reject { |pos| @considered_positions.include?(pos) }
        @considered_positions.concat(new_pos)
        new_pos
    end

    def build_move_tree
        

    end
end