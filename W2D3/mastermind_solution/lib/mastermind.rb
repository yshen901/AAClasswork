require_relative "code"

class Mastermind
  def initialize(length)
    @secret_code = Code.random(length)
  end

  def print_matches(code)
    puts "exact matches: #{@secret_code.num_exact_matches(code)}"
    puts "near matches: #{@secret_code.num_near_matches(code)}"
  end

  def ask_user_for_guess
    print "Enter a code: "
    guessed_code = Code.from_string(gets.chomp)
    self.print_matches(guessed_code)
    @secret_code == guessed_code
  end
end
