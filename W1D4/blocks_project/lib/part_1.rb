require "byebug"
def select_even_nums(nums)
    nums.select { |num| num % 2 == 0}
end

def reject_puppies(dogs)
    dogs.reject { |dog| dog["age"] <= 2}
end

def count_positive_subarrays(arrays)
    arrays.count { |array| array.sum > 0}
end

def aba_translate(string)
    builder = ""
    vowels = "aeiouAEIOU"
    string.each_char do |char|
        builder << char
        builder << "b" + char if vowels.include?(char)
    end
    return builder
end

def aba_array(words)
    words.map { |word| aba_translate(word) }
end