class MyQueue
  attr_reader :size
  def initialize
    @stack_arr = []
    @size = 0
  end

  def peek
    @stack_arr[-1]
  end

  def empty?
    @size == 0
  end

  def push(val)
    @stack_arr.push(val)
    @size += 1
    self
  end

  def pop
    @size -= 1
    @stack_arr.pop
  end
end