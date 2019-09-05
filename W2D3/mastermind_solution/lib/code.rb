class Code
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  attr_reader :pegs

  def self.valid_pegs?(chars)
    chars.all? { |char| Code::POSSIBLE_PEGS.include?(char.upcase) }
  end

  def self.random(length)
    pegs = Array.new(length) { Code::POSSIBLE_PEGS.keys.sample }
    Code.new(pegs)
  end

  def self.from_string(string)
    Code.new(string.split(""))
  end

  def initialize(pegs)
    raise if !Code.valid_pegs?(pegs)
    @pegs = pegs.map(&:upcase)
  end

  def [](index)
    @pegs[index]
  end

  def length
    @pegs.length
  end

  def ==(other_code)
    self.length == other_code.length && self.num_exact_matches(other_code) == self.length
  end

  def num_exact_matches(guess_code)
    (0...guess_code.length).count { |i| guess_code[i] == @pegs[i] }
  end

  def num_near_matches(guess_code)
    num_matches = (0...guess_code.length).count do |i|
      guess_peg = guess_code[i]
      @pegs.include?(guess_peg)
    end

    num_matches - self.num_exact_matches(guess_code)
  end
end
