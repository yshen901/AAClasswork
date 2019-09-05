# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(str)
    i = 0
    compressed = ""
    while i < str.length 
        char = str[i]
        count = 1
        while i+1 < str.length && char == str[i+1] 
            count += 1
            i += 1
        end
        i += 1
        compressed << count.to_s if count > 1
        compressed << char
    end
    compressed
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
