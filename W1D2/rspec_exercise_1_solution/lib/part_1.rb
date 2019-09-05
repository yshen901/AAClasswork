def average(num_1, num_2)
  (num_1 + num_2) / 2.0
end

def average_array(nums)
  nums.sum / nums.length.to_f
end

def repeat(string, num)
  string * num
end

def yell(string)
  string.upcase + "!"
end

def alternating_case(sentence)
  words = sentence.split(" ")

  new_words = words.map.with_index do |word, i|
    if i.even?
      word.upcase
    else
      word.downcase
    end
  end

  new_words.join(" ")
end
