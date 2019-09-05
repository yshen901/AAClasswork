def is_prime?(num)
  (2...num).each do |factor|
    return false if num % factor == 0
  end

  num > 1
end

def nth_prime(n)
  count = 0

  num = 1
  while count < n
    num += 1
    count += 1 if is_prime?(num)
  end

  num
end

def prime_range(min, max)
  primes = []

  (min..max).each do |num|
    primes << num if is_prime?(num)
  end

  primes
end
