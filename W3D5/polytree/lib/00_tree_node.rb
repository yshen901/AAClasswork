class PolyTreeNode
    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(parent_node)
        if parent_node == nil
            @parent.children.delete(self)
            @parent = nil
            return nil
        end

        if @parent == nil
            @parent = parent_node
            parent_node.children << self
        else
            @parent.children.delete(self)
            @parent = parent_node
            parent_node.children << self
        end
    end

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        raise "Not a Child" unless self.children.include?(child_node)
        child_node.parent = nil
    end

    def dfs(target_value)
        return self if self.value == target_value
        return nil if self.children.empty?

        self.children.each do |child|
            result = child.dfs(target_value)
            return result if result
        end
        nil
    end

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            node = queue.shift 
            return node if node.value == target_value
            queue.concat(node.children)
        end 
        nil
    end

    def inspect
        child_array = @children.map { |child| child.value }
        @parent ? (parent_pos = @parent.value) : (parent_pos = nil)
        { value:@value, parent:parent_pos, children:child_array }
    end
    
    public
    attr_reader :value, :parent
    attr_accessor :children
end