require "set"
class WordChainer
  ALPHABET = ('a'..'z').to_a

  def initialize(dictionary_file_name)
    words = File.readlines(dictionary_file_name).map(&:chomp)
    @dictionary = Set.new
    words.each { |word| @dictionary.add(word) }
  end

  def adjacent_words(word)
    words = []
    word.each_char.with_index do |old_letter, i|
      ALPHABET.each do |new_letter|
        unless new_letter == old_letter
          new_word = word.dup
          new_word[i] = new_letter
          words << new_word if @dictionary.include?(new_word)
        ends
      end
    end
    words
  end

end