require "byebug"
def reverser (string, &prc)
    reversed = ""
    i = string.length - 1
    while i >= 0
        reversed << string[i]
        i -= 1
    end
    return prc.call(reversed)
end

def word_changer (string, &prc)
    words = string.split(" ")
    words.each_with_index { |word, i| words[i] = prc.call(word) }
    words.join(" ")
end

def greater_proc_value (value, prc1, prc2)
    prc1.call(value) > prc2.call(value) ? prc1.call(value) : prc2.call(value)
end

def and_selector (arr, prc1, prc2)
    arr.select { |ele| prc1.call(ele) && prc2.call(ele)}
end

def alternating_mapper (arr, prc1, prc2)
    arr.map.with_index { |ele, i| i % 2 == 0 ? prc1.call(ele) : prc2.call(ele) }
end