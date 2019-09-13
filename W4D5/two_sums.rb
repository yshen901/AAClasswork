# O(n^2)
def bad_two_sum?(nums, target)
  (0...nums.length).each do |i|
    (i + 1...nums.length).each do |j|
      return true if nums[i] + nums[j] == target
    end
  end
  false
end

# O(nlog(n))
def okay_two_sum?(nums, target)
  sorted_nums = nums.sort
  sorted_nums.each do |num|
    other_num = target - num
    return true if bs_index(nums, other_num)
  end
  false
end

def bs_index(nums, target)
  return false if nums.empty?
  mid = nums.size / 2
  return true if nums[mid] == target
  if nums[mid] > target
    bs_index(nums.take(mid), target)
  else
    bs_index(nums.drop(mid+1), target)
  end
end

# O(n)
def best_two_sum?(nums, target)
  exists = Hash.new(false)
  nums.each { |num| exists[num] = true }
  nums.each do |num|
    other_num = target - num
    return true if exists[other_num]
  end
  false
end

p best_two_sum?([1,2,3,4], 3)
p best_two_sum?([1,5,3,4], 3)
p bs_index([1,2,3,4], 3)