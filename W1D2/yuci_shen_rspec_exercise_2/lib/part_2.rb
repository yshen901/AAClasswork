def palindrome?(str)
    new_str = ""

    i = str.length - 1
    while i >= 0
        new_str << str[i]
        i -= 1
    end

    str == new_str
end

def substrings(str)
    final = []
    str.each_char.with_index do |char1, i|
        str.each_char.with_index do |char2, j|
            final << str[i..j] if j >= i
        end
    end
    final
end

def palindrome_substrings(str)
    substrings(str).select { |sub| sub.length > 1 && palindrome?(sub) }
end