require_relative "../../Yuci_Shen_polytree/lib/00_tree_node.rb"

class KnightPathFinder
  attr_reader :start_pos

  def self.valid_moves(pos) #returns array of possible positions to move to
    x, y = pos
    moves = [
        [x-1, y-2], [x-1, y+2], 
        [x+1, y-2], [x+1, y+2],
        [x-2, y-1], [x-2, y+1], 
        [x+2, y-1], [x+2, y+1]
    ]

    moves.select do |move|
      move[0].between?(0, 7) && move[1].between?(0, 7)
    end
  end

  def initialize(initial_pos)
    @start_pos = PolyTreeNode.new(initial_pos)
    @considered_positions = []
    self.build_move_tree
  end

  def new_move_positions(pos)
    valid = KnightPathFinder.valid_moves(pos)
    new_pos = valid.reject do |positions| 
      @considered_positions.include?(positions)
    end
    @considered_positions.concat(new_pos)
    @considered_positions << pos
    new_pos
  end

  def build_move_tree
    queue = []
    queue << @start_pos
    until queue.empty?
      root = queue.shift
      children_positions = new_move_positions(root.value)
      children_positions.each do |children_position|
        root.add_child(PolyTreeNode.new(children_position))
      end
      queue.concat(root.children)
    end
  end

  def find_path(end_pos)
    end_node = @start_pos.dfs(end_pos)
    trace_path_back(end_node)
  end

  def trace_path_back(end_node)
    path = [end_node.value]
    current = end_node
    until current == @start_pos
      current = current.parent        
      path << current.value
    end
    path.reverse
  end

  def inspect
    { start_pos:@start_pos }
  end
end