def partition(arr, num)
    larger = []
    lesser = []
    arr.each {|ele| ele < num ? lesser<<ele : larger<<ele}
    [lesser, larger]
end

def merge(hash1, hash2)
    merged = hash2.clone
    hash1.each {|k, v| merged[k] = v if !merged.has_key?(k)}
    merged
end

def censor(sent, curses)
    final = []
    words = sent.split(" ")
    words.each {|word| curses.include?(word.downcase)? final<<vowel_star(word) : final<<word}
    final.join(" ")
end

def vowel_star(word)
    vowel = "aeiouAEIOU"
    new_word = ""
    word.each_char {|char| vowel.include?(char)? new_word << "*" : new_word << char}
    new_word
end

def power_of_two?(num)
    i = 1
    i *= 2 while i < num
    i == num
end