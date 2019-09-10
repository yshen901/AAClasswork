# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.empty?
    self.max - self.min
  end

  def average
    return nil if self.empty?
    self.sum / self.length.to_f
  end

  def median
    return nil if self.empty?

    mid_index = self.length / 2
    sorted = self.sort
    if self.length.odd?
      return sorted[mid_index]
    else
      return (sorted[mid_index - 1] + sorted[mid_index]) / 2.0
    end
  end

  def counts
    count_hash = Hash.new(0)
    self.each { |ele| count_hash[ele] += 1 }
    count_hash
  end

  def my_count(item)
    counter = 0
    self.each { |ele| counter += 1 if ele == item }
    counter
  end

  def my_index(val)
    self.each_with_index { |ele, i| return i if ele == val }
    nil
  end

  def my_uniq
    elements = {}
    self.each { |ele| elements[ele] = true }
    elements.keys
  end

  def my_transpose
    transposed = []

    self.each_with_index do |ele1, idx1|
      row = []

      self.each_with_index do |ele2, idx2|
        row << self[idx2][idx1]
      end

      transposed << row
    end

    transposed
  end
end
