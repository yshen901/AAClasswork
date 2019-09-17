class HashSet
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
    @store[num.hash % num_buckets]
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