def reverser(string, &prc)
  prc.call(string.reverse)
end

def word_changer(sentence, &prc)
  new_words = []
  words = sentence.split(" ")
  words.each { |word| new_words << prc.call(word) }
  new_words.join(" ")
end

def greater_proc_value(num, prc_1, prc_2)
  result_1 = prc_1.call(num)
  result_2 = prc_2.call(num)
  if result_1 > result_2
    return result_1
  else
    return result_2
  end
end

def and_selector(array, prc_1, prc_2)
  selected = []

  array.each do |el|
    if prc_1.call(el) && prc_2.call(el)
      selected << el
    end
  end

  selected
end

def alternating_mapper(array, prc_1, prc_2)
  mapped = []

  array.each_with_index do |el, idx|
    if idx.even?
      mapped << prc_1.call(el)
    else
      mapped << prc_2.call(el)
    end
  end

  mapped
end
