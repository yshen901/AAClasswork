require "byebug"

def my_min(list)
  (0...list.length).each do |i|
    smallest = (i + 1...list.length).all? { |j| list[i] <= list[j] }
    return list[i] if smallest
  end
end

def my_min_2(list)
  smallest = list[0]
  list.each { |ele| smallest = ele if ele < smallest }
  smallest
end

def largest_continuous_subsum(list)
  final = []
  subset = []
  (0...list.length).each do |i|
    (i...list.length).each do |j|
      subset << list[j]
      final << subset.dup
    end
    subset = []
  end
  largest = final[0].sum
  final.each { |subset| largest = subset.sum if largest < subset.sum }
  largest
end

def lcs_better(list)
  largest_sum = list[0]
  current_sum = 0
  
  list.each do |ele|
    current_sum += ele
    largest_sum = current_sum if current_sum > largest_sum
    current_sum = 0 if current_sum < 0
  end
  largest_sum
end

puts largest_continuous_subsum([4, -5, -3, 1, 2])
puts lcs_better([-5, -3, -1])



