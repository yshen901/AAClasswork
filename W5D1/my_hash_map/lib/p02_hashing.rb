class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    master_hash = self.first.hash
    self.each_with_index do |ele, i|
      next if i == 0

      master_hash = (master_hash + ele.hash) ^ ele.hash
    end

    master_hash
  end
end

class String
  def hash 
    self.unpack("C*").hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    pair_hashes = self.map do |k, v|
      (k.to_s.hash + 3) * 7 + v.hash 
    end

    pair_hashes.inject(0) { |acc, hash| acc ^ hash }
  end
end
