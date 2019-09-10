class Hangman
  DICTIONARY = ["cat", "dog", "bootcamp", "pizza"]

  def self.random_word 
    DICTIONARY.sample
  end
  
  def initialize
    @secret_word = self.class.random_word
    @guess_word = Array.new(@secret_word.length, '_')
    @attempted_chars = []
    @remaining_incorrect_guesses = 5
  end

  def guess_word
    @guess_word
  end

  def attempted_chars
    @attempted_chars
  end

  def remaining_incorrect_guesses
    @remaining_incorrect_guesses
  end

  def already_attempted? (char)
    attempted_chars.include?(char)
  end

  def get_matching_indices (char)
    indices = []
    @secret_word.each_char.with_index { |letter, i| indices << i if letter ==  char}
    indices
  end

  def fill_indices(char, indices)
    indices.each { |i| @guess_word[i] = char }
  end

  def try_guess (char)
    
    if already_attempted?(char)
      puts "that has already been attempted"
      return false
    end

    @attempted_chars << char
    if !@secret_word.include?(char)
      @remaining_incorrect_guesses -= 1
    else
      fill_indices(char, get_matching_indices(char))
    end
    true
  end

  def ask_user_for_guess
    p "Enter a char:" 
    input = gets.chomp
    try_guess(input)
  end

  def win?
    puts "WIN" if @guess_word.join("") == @secret_word
    @guess_word.join("") == @secret_word
  end

  def lose?
    puts "LOSE" if @remaining_incorrect_guesses == 0
    @remaining_incorrect_guesses == 0
  end

  def game_over?
    if win? || lose?
      puts @secret_word 
      return true
    end
    false
  end

end
