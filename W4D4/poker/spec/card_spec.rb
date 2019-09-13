require 'card'

RSpec.describe Card do
  describe "#initialize" do
    it "should should take in two symbols, a value and a suit, as args" do
      expect { Card.new(:K, :S) }.to_not raise_error
    end
  end
end