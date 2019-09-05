
def my_map! (arr, &prc)
    arr.each_with_index { |ele, i| arr[i] = prc.call(ele) }
    arr
end

def two? (arr, &prc)
    count = 0
    arr.each { |ele| count += 1 if prc.call(ele) }
    count == 2
end

def nor_select (arr, prc_1, prc_2)
    arr.select { |ele| !(prc_1.call(ele) || prc_2.call(ele)) }
end

def array_of_hash_sum (hashes)
    sum = 0
    hashes.each do |hash|
        hash.each { |key, val| sum += val }
    end
    sum
end

def slangify (string)
    vowels = "aeiouAEIOU"
    words = string.split(" ")

    words.each_with_index do |word, i|
        word.each_char.with_index do |char, j|
            if vowels.include?(char)
                words[i] = word[0...j] + word[j+1..-1] 
                break
            end
        end
    end
    words.join(" ")
end

def char_counter (str, *chars)
    counts = Hash.new(0)

    if chars.length == 0
        str.each_char { |char| counts[char] += 1}
    else
        chars.each { |char| counts[char] = 0 }
        str.each_char { |char| counts[char] += 1 if chars.include?(char) }
    end
    counts
end