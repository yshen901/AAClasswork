# Run `bundle exec rspec` and satisy the specs.
# You should implement your methods in this file.
# Feel free to use the debugger when you get stuck.

def largest_prime_factor (num)
    largest = 1
    (2..num).each do |ele|
        if num % ele == 0 && prime?(ele) && largest < ele
            largest = ele
        end
    end
    return largest
end


def prime?(num)
    return false if num < 2
    (2...num).each {|ele| return false if num % ele == 0}
    true
end


def unique_chars?(str)
    hash = Hash.new(0)

    str.each_char do |char|
        return false if hash[char] == 1
        hash[char] += 1
    end

    return true
end


def dupe_indices(arr)
    dups = duplicates(arr)
    indices = {}
    arr.each_with_index do |ele, i|
        if indices.has_key?(ele) 
            indices[ele] << i
        elsif dups.include?(ele)
            indices[ele] = [i]
        end
    end
    indices
end


def duplicates(arr)
    dup_char = []
    hash = Hash.new(0)
    arr.each { |char| hash[char] += 1 }
    hash.each do |k, v|
        dup_char << k if v >= 2
    end
    dup_char
end

def ana_array (arr1, arr2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)

    arr1.each { |char| hash1[char] += 1 }
    arr2.each { |char| hash2[char] += 1 }

    hash1 == hash2
end
