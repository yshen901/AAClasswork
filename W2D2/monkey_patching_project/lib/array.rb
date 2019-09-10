# Monkey-Patch Ruby's existing Array class to add your own custom methods
class Array
  def span
    return nil if self.length == 0
    sorted = self.sort
    sorted[-1] - sorted[0]
  end

  def average
    return nil if self.length == 0
    self.sum.to_f / self.length
  end

  def median
    length = self.length
    sorted = self.sort
    return nil if length == 0
    if length % 2 == 0
        left = (length - 1) / 2
        right = left + 1
        return (sorted[left] + sorted[right]).to_f / 2
    end
    sorted[length / 2]
  end

  def counts
    hash = Hash.new(0)
    self.each { |letter| hash[letter] += 1 }
    return hash
  end

  def my_count (letter)
    self.counts[letter]
  end

  def my_index(ele)
    self.each_with_index { |val, i| return i if val == ele }
    nil
  end

  def my_uniq
    unique = []
    self.each { |ele| unique << ele if !unique.include?(ele) }
    unique
  end

  def my_transpose
    transposed = Array.new(self[0].length) { Array.new(self.length) } # [[],[],[]]

    transposed.each_with_index do |ele, i|
        self.each_with_index do |ele2, i2|
            transposed[i][i2] = ele2[i]
        end
    end
    transposed
  end
end
