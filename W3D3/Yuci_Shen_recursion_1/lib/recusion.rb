def range(min, max) # 1, 5
    return [] if max <= min # 1 4   1 3   1 2  1 1  1 0 ==> [] 
    ([min]).concat(range(min+1, max))# 1 5 2 5==> [1 2 3 4]      ==> [2, 3, 4]3 5 4  == [3, 4]5  4 5 ==> [min]    5  5  ==>[]  6  5 ==> []   [min].concat
end

def sum_of_array_r(arr)
    return nil if arr.empty?
    return arr.first if arr.length == 1
    arr.first + sum_of_array_r(arr.drop(1))
end

def sum_of_array_i(arr)
    return nil if arr.empty?
    arr.inject { |acc, el| acc + el}
end

def exp_1(a, b)
    return 1 if b == 0
    return a if b == 1
    a * exp_1(a, b-1)
end

def exp_2(a,b)
    return 1 if b == 0
    return a if b == 1
    if b.even?
        result = exp_2(a, b/2)
        return result * result
    else
        result = exp_2(a, (b-1)/2)
        return a * result * result
    end
end

# def exp_2(a,b)
#     return 1 if b == 0
#     return a if b == 1
#     coeffient = 1
#     result = 1
#     if b.odd?
#         coeffient = a # 2
#         b -= 1 # 2
#     end
#     result = exp_2(a, b / 2) # (2, 1) => 2
#     coefficient * result * result # (2, 3) # 2 * 2 * 2
# end

# shallow dup => new_array = [old_array[0], old_array[1]]
# deep dup => new array = [old_array[0].dup, old_array[1].dup]
def deep_dup(arr) #[[1]]  # [1]
    return [] if arr.empty? # Case 0: empty array
    if arr.none? { |ele| ele.is_a?(Array) } # Case 1: 1D array
        return arr.dup  # [1, .... ].concat  
    end
    if arr.length == 1 && arr.first.is_a?(Array) # Case 2: 2D array w/ 1 value i.e. [[1, [2, 3]]]
        return [deep_dup(arr.first)] 
    end

    first = arr.take(1) # [[1]]
    rest = arr.drop(1) # [2, 3, 4]
    deep_dup(first).concat(deep_dup(rest))
end

# Base Cases:
#   1) n <= 0       ->  nil
#   2) n = 1 or 2   ->  [0,1].take(n)
# Recursive Step(s)
#   1) previous values = fib(n-1)
#   2) nth value = (n-1)th value + (n-2)th value
def fib (n) # 0, 1, 1, 2, 3, 5...
    return nil if n <= 0
    return [0,1].take(n) if n <= 2

    prev_values = fib(n-1)
    nth_val = prev_values[-1] + prev_values[-2]
    prev_values << nth_val
end

# Base Cases:
#   1) nil if !arr.include?(target) && length <= 1
# Recursive Step(s):
#   1) grab the middle value and index
#   2) compare the middle with target
#       a) target is smaller, call bsearch on left side (0...middle)
#           i)  return the result of the call
#       b) target is larger, call bsearch on right side(middle+1...-1)
#           i)  return nil if bsearch returns nil
#           ii) return mid_idx + bsearch + 1 otherwise
#       c) target is equal, return the middle index
def bsearch(arr, target)
    return nil if !arr.include?(target) && arr.length <= 1

    mid_idx = arr.length / 2
    middle = arr[mid_idx]
    if target < middle
        return bsearch(arr[0...mid_idx], target) #either nil, or index on left side
    elsif target > middle
        index = bsearch(arr[(mid_idx+1)..-1], target) #either nil, or index on right side
        index == nil ? (return nil) : (return index + mid_idx + 1)
    else 
        return mid_idx
    end
end

# Base Cases:
#   1) array.length == 0 ==> [], itself
#   2) array.length == 1 ==> arr, itself   lenth <= 1
# Recursive Step:
#   1) split into two halves: left and right
#   2) sort each half merge_sort(left) and merge_sort(right)
#   3) combine halves merge(merged_left, merged_right)
def merge_sort(arr)
    return arr if arr.length <= 1
    mid_idx = arr.length / 2
    left = merge_sort(arr[0...mid_idx])
    right = merge_sort(arr[mid_idx..-1])
    merge(left, right)
end

def merge(arr1, arr2)
    sorted = []
    until arr1.empty? || arr2.empty?
        if arr1.first < arr2.first
            sorted << arr1.shift
        else
            sorted << arr2.shift
        end
    end
    !arr1.empty? ? (return sorted.concat(arr1)) : (return sorted.concat(arr2))
end

#Base Cases
#   1) Empty array -> return [[]] 
#Recursive Steps
#   1) sub = subset on first part, excluding last piece
#   2) sub2 = loop through sub and include the first part
#   3) sub + sub2
def subsets (arr)
    return [[]] if arr.empty?
    sub = subsets(arr[0...-1])
    sub2 = sub.map { |ele| ele.dup << arr[-1] } 
    sub.concat(sub2)
end

#Base Case
#   1) coins.include?(target) => coin
#   2) negative target, no coins => nil
#Recursive Step:
#   1) best_solution = nil
#   2) coin.sort!
#   3) for each coin
#       a) make_better_change(target - coin, coins[current..-1])
#       b) push coin into the solution from (a) 
#       c) if best_soluton is nil
#           true : best_solution = result --> next
#           false: best_solution = result if result.length < best_solution.length
#   4) return best_solution
def make_better_change(target, coins)
    return [target] if coins.include?(target) #why doesn't target work? (24, [1]) returns 1?
    return nil if target < 0 || coins.empty?

    best_sol = nil
    coins.sort!
    coins.each_with_index do |coin, i|
        result = make_better_change(target - coin, coins[i..-1])
        next unless result
        result << coin
        best_sol = result if best_sol == nil || result.length < best_sol.length
    end
    best_sol
end

# (24, [10,7,1])
# (14, [10,7.1])
# (4, [10,7,1])    --> 2 nexts, because 4 < 10 and 4 < 7...goes to 1
# (4, [1])  
# (3, [1])  [1,1]
# (2, [1])  [1] << 1 => [1,1]
# (1, [1])   => [1]


# mbc(23, [1])
# mbc(22, [1])
# ....
# mbc(2, [1]) -> result = mbc(1,[1]) << 1 = 1 << 1 = 1
# mbc(1, [1]) -> result = 1
