def average(num1, num2)
  (num1 + num2)/2.0
end

def average_array(arr)
   (arr.sum)*1.0/arr.length
end

def repeat(str, num)
  str * num
end

def yell(str)
  str.upcase + "!"
end

def alternating_case(str)
  words = str.split(" ")
  words.each_with_index {|word, i| i%2 == 0 ? word.upcase! : word.downcase!}
  words.join(" ")
end

