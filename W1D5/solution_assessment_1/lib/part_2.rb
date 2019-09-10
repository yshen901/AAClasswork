def element_count(array)
  count = Hash.new(0)
  array.each { |el| count[el] += 1 }
  count
end

def char_replace!(string, hash)
  (0...string.length).each do |i|
    if hash.has_key?(string[i])
      string[i] = hash[string[i]]
    end
  end

  string
end

def product_inject(array)
  array.inject { |product, el| product * el }
end
