class Array
  def my_uniq
    new_arr = []
    self.each { |el| new_arr << el unless new_arr.include?(el) }
    new_arr
  end

  def two_sum
    pairs = []
    (0...self.length - 1).each do |i|
      (i + 1...self.length).each do |j|
        pairs << [i, j] if self[i] + self[j] == 0
      end
    end
    pairs
  end
end

def my_transpose(arr)
  output = Array.new(arr.length) { Array.new(arr.length) }
  arr.each_with_index do |row, row_idx|
    row.each_with_index do |col, col_idx|
      output[col_idx][row_idx] = arr[row_idx][col_idx]
    end
  end
  output
end

def stock_picker(prices)
  best_prices = [0, 0]
  (0...prices.length - 1).each do |i|
    (i + 1...prices.length).each do |j|
      buy, sell = best_prices
      best_prices = [i, j] if prices[j] - prices[i] > prices[sell] - prices[buy]
    end
  end
  best_prices
end