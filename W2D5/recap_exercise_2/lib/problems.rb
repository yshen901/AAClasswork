# Write a method, least_common_multiple, that takes in two numbers and returns the smallest number that is a mutiple 
# of both of the given numbers
def least_common_multiple(num_1, num_2)
    min = [num_1, num_2].min
    max = [num_1, num_2].max
    (1..min).each { |num| return num*max if num*max % min == 0}
end


# Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
# most in the string.
def most_frequent_bigram(str)
#grab substrings of length 2
#hash that contains the substring
#return key with max value 

    bigrams = Hash.new(0)
    str.each_char.with_index do |char, i|
        bigrams[str[i..i+1]] += 1 if i + 1 < str.length
    end
    bigrams.max_by { |k,v| v }.first
end


class Hash
    # Write a method, Hash#inverse, that returns a new hash where the key-value pairs are swapped
    def inverse
        new_hash = {}
        self.each { |k,v| new_hash[v] = k }
        new_hash
    end
end


class Array
    # Write a method, Array#pair_sum_count, that takes in a target number returns the number of pairs of elements that sum to the given target
    def pair_sum_count(num)
        (0...self.length).sum do |i|
            (i+1...self.length).count { |j| self[i] + self[j] == num }
        end
    end

    # Write a method, Array#bubble_sort, that takes in an optional proc argument.
    # When given a proc, the method should sort the array according to the proc.
    # When no proc is given, the method should sort the array in increasing order.
    def bubble_sort(&prc)
        prc ||= Proc.new { |i, j| i <=> j }
        
        sorted = false 
        while !sorted 
            sorted = true 
            (0...self.length).each do |i|
                if (i + 1) < self.length && prc.call(self[i], self[i + 1]) == 1 
                    self[i], self[i + 1] = self[i + 1], self[i] 
                    sorted = false 
                end
            end
        end
        self
    end
end
