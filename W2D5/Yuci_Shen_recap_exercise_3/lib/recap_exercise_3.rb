def no_dupes?(arr)
    hash = Hash.new(0)
    arr.each { |ele| hash[ele] += 1 }
    hash.keys.select { |k| hash[k] == 1 }
end

def no_consecutive_repeats?(arr)
    (0...arr.length-1).none? { |i| arr[i] == arr[i + 1] }
end

def char_indices(str)
    hash = Hash.new { |h,k| h[k] = [] } 
    str.each_char.with_index { |char, i| hash[char] << i }
    hash
end

def longest_streak(str) #aaaxyyyyyzz
    current = "" 
    longest = ""
    str.each_char.with_index do |char, i|
        current.include?(char) ? current += char : current = char
        longest = current if longest.length <= current.length
    end
    longest
end

# puts longest_streak("aaaxyyyyyzz" )

def bi_prime?(num)
    (2...num).count {|factor| num % factor == 0} == 2
end

def vigenere_cipher(message, keys)
    alpha = ('a'..'z').to_a
    new_message = ""
    message.each_char.with_index do |char, i|
        old_idx = alpha.index(char)
        new_idx = old_idx + (keys[i % keys.length])
        new_message += alpha[new_idx % 26] 
    end
    new_message
end

# puts vigenere_cipher("toerrishuman", [1, 2, 3])
# puts vigenere_cipher("zebra", [3, 0]) 

def vowel_rotate(str)
    vowels = "aeiou"
    previous = ""
    first_idx = -1

    str.each_char.with_index do |char, i|
        if vowels.include?(char)
            previous.empty? ? first_idx = i : str[i] = previous
            previous = char
        end
    end
    str[first_idx] == previous if first_idx != -1
    str
end

# puts vowel_rotate('headphones')

class String
    def select(&prc)
        return "" if !prc
        new_string = ""
        self.each_char { |char| new_string += char if proc.call(char) }
        new_string
    end

    def map!(&prc)
        return self if !prc 
        self.each_char.with_index { |c, i| self[i] = prc.call(c) }
        self
    end
end

# puts "app academy".select { |ch| !"aeiou".include?(ch) }

# word_1 = "Lovelace"
# word_1.map! do |ch| 
#     if ch == 'e'
#         '3'
#     elsif ch == 'a'
#         '4'
#     else
#         ch
#     end
# end
# p word_1  

def multiply(a,b)
    a, b = -a, -b if a < 0 && b < 0
    return a if b == 1 || b == -1
    b > 0 ? a + multiply(a,b-1) : -(a + multiply(-a,b+1))
end

# p multiply(3, 6)      # => 18

def lucas_sequence(num)
    return [] if num == 0 
    return [2] if  num == 1
    return [2,1] if num == 2

    previous = lucas_sequence(num-1)
    previous << previous[-1] + previous[-2]
end

# num = 6  [2,1,3,4,7,11]
# previous = ls(5) [2,1,3,4,7]
# 5
# previous = ls(4)[2,1,3,4]
# 4
# previous = ls(3) [2,1,3]
# 3
# previous = ls(2) [2,1]

# p lucas_sequence(0)   # => []
# p lucas_sequence(1)   # => [2]    
# p lucas_sequence(2)   # => [2, 1]
# p lucas_sequence(3)   # => [2, 1, 3]
# p lucas_sequence(6)   # => [2, 1, 3, 4, 7, 11]
# p lucas_sequence(8)   # => [2, 1, 3, 4, 7, 11, 18, 29]

def prime?(num)
    false if num < 2
    (2...num).each { |fac| return false if num % fac == 0}
    true
end

def prime_factorization(num)
    return [num] if prime?(num)
    (2...num).each do |factor|
        if num % factor == 0 && prime?(factor)
            return [factor] + prime_factorization(num / factor)
        end
    end
end

# p prime_factorization(12)     # => [2, 2, 3]
# p prime_factorization(24)     # => [2, 2, 2, 3]
# p prime_factorization(25)     # => [5, 5]
# p prime_factorization(60)     # => [2, 2, 3, 5]
# p prime_factorization(7)      # => [7]
# p prime_factorization(11)     # => [11]
# p prime_factorization(2017)   # => [2017]
