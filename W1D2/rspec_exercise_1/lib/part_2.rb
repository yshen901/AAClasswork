def hipsterfy(word)
    vowels = "aeiou"
    
    i = word.length-1
    while i >= 0
        if vowels.include?(word[i])
            word[i] = ""
            return word
        end
        i -= 1
    end
    word
end

def vowel_counts(str)
    vowels = "aeiou"
    hash = Hash.new(0)
    str.downcase.each_char { |char| hash[char] += 1 if vowels.include?(char)}
    hash
end

def caesar_cipher(str, n)
    alphabet = "abcdefghijklmnopqrstuvwxyz"

    str.each_char.with_index do |char, i|
        if alphabet.include?(char)
            str[i] = alphabet[ (alphabet.index(char) + n) % 26 ]
        end
    end
    str
end