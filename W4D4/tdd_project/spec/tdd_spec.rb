require "rspec"
require "tdd"

RSpec.describe Array do
  subject(:arr) { [6, 7, 7, 8, 4, 4, 9] }
  describe "#my_uniq" do
    it "should return an array with no repeat numbers" do
      expect([1, 2, 1, 3, 3].my_uniq).to eq([1, 2, 3])
      expect(arr.my_uniq).to eq(arr.uniq)
    end
    it "should repeat numbers in the correct order" do
      expect([1, 2, 1, 3, 3].my_uniq).to_not eq([3,2,1])
    end
  end

  describe "#two_sum" do
    it "should return an array of index pairs the elements at which sum to zero" do
      expect([-1, 0, 2, -2, 1].two_sum).to contain_exactly([2, 3], [0, 4])
    end
    it "should return an array of index pairs that are in order" do
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end
  end
end

RSpec.describe "#my_transpose" do
  subject(:rows) { [[0, 1, 2], [3, 4, 5], [6, 7, 8]] }
  it "should take in a single array as an argument" do
    expect { my_transpose([1]) }.to_not raise_error(ArgumentError)
  end
  it "should swap rows values with column values" do
    expect(my_transpose(rows)).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
  end
end

describe "stock_picker" do
  subject(:prices) { [20, 4, 4, 5, 4, 5, 6, 9, 11, 100, 30, 2] }
  it "should take in a single array as an argument" do
    expect { stock_picker(prices) }.to_not raise_error
  end
  
  it "should select a pair of indices representing the best buy/sell days" do
    expect(stock_picker(prices)).to eq([1,9])
  end


end