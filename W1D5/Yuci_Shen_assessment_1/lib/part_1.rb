def is_prime?(number)
   return false if number < 2
   (2...number).each {|num| return false if number % num == 0}
   true
end

def nth_prime(n)
    return nil if n < 1
    current_prime = 1
    n.times do |primes|
        current_prime += 1
        current_prime += 1 while !is_prime?(current_prime)
    end
    current_prime
end

def prime_range(min, max)
    primes = []
    (min..max).each {|number| primes << number if is_prime?(number)}
    primes
end