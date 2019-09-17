class MaxIntSet
  attr_reader :store
  def initialize(max)
    @max = max
    @store = Array.new(@max, false) 

  end

  def insert(num)
    is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    raise "Out of bounds" unless num.between?(0, @max)
  end

  def validate!(num); end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    bucket = self[num]
    bucket << num
  end

  def remove(num)
    bucket = self[num]
    bucket.delete(num)
  end

  def include?(num)
    # bucket = self.[](num) this doesn't work
    bucket = self[num] #but this does?
    bucket.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    bucket = self[num]
    return if bucket.include?(num)

    bucket << num 
    @count += 1
    
    resize! if count == num_buckets - 1
  end

  def remove(num)
    bucket = self[num]
    return unless bucket.include?(num)

    bucket.delete(num)
    @count -= 1
  end

  def include?(num)
    bucket = self[num]
    bucket.include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store.clone
    @store = Array.new(num_buckets * 2) { Array.new }
    @count = 0
    old_store.each do |bucket|
      bucket.each { |ele| self.insert(ele) }
    end
  end
end
