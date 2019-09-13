def first_anagram?(first, second)
  first_chars = first.chars
  second_chars = second.chars
  first_perms = first_chars.permutations.to_a
  first_perms.any? { |ele| ele == second_chars }
end

def second_anagram?(first, second)
  first.each_char do |ele|
    return false unless second.include?(ele)
    second[second.index?(ele)] = ""
  end
  second.empty?
end

def third_anagram?(first, second)
  first.chars.sort == second.chars.sort
end

def fourth_anagram?(first, second)
  hash = Hash.new(0)
  first.each_char { |ele| hash[ele] += 1 }
  second.each_char { |ele| hash[ele] -= 1 }
  hash.all? { |k, v| v.zero? }
end

p fourth_anagram?("hi", "ih")