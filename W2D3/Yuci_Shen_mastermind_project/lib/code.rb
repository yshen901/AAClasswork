class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs? (chars)
    chars.all? { |char| POSSIBLE_PEGS.include?(char.upcase) }
  end

  def self.random (length)
    random = []
    length.times {random << POSSIBLE_PEGS.keys.sample}
    self.new(random)
  end

  def self.from_string (string)
    self.new(string.split(''))
  end

  attr_reader :pegs

  def initialize (chars)
    raise "invalid pegs" if !self.class.valid_pegs?(chars)
    @pegs = chars.map{ |char| char.upcase }
  end

  def [] (index)
    @pegs[index]
  end

  def length
    @pegs.length
  end

  def num_exact_matches (guess)
    sum = 0
    @pegs.each_with_index {|peg,i| sum += 1 if guess.pegs[i] == peg}
    sum
  end

  def num_near_matches (guess)
    guess.pegs.count { |peg| @pegs.include?(peg) } - num_exact_matches(guess)
  end

  def == (guess)
    num_exact_matches(guess) == @pegs.length && guess.pegs.length == @pegs.length
  end
end
