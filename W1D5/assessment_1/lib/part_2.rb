def element_count (array)
    hash = Hash.new(0)
    array.each { |element| hash[element] += 1 }
    hash
end

def char_replace!(string, hash)
    string.each_char.with_index {|char, i| string[i] = hash[char] if hash.has_key?(char)}
    string
end

def product_inject (numbers_array)
    # numbers_array.inject { |acc, ele| acc * ele }
    numbers_array.inject(&:*)
end