class MyQueue
  attr_reader :size
  def initialize
    @queue_arr = []
    @size = 0
  end

  def peek
    @queue_arr[0]
  end

  def empty?
    @size == 0
  end

  def enqueue(val)
    @size += 1
    @queue_arr.push(val)
    self
  end

  def dequeue
    @size -= 1
    @queue_arr.shift
  end
end