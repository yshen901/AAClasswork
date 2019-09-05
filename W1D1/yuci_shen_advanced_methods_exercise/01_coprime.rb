# Write a method, coprime?(num_1, num_2), that accepts two numbers as args.
# The method should return true if the only common divisor between the two numbers is 1.
# The method should return false otherwise. For example coprime?(25, 12) is true because
# 1 is the only number that divides both 25 and 12.
def coprime?(num_1, num_2)
    fact_1 = factors(num_1)
    fact_2 = factors(num_2)
    return fact_1.none?{|factor| fact_2.include?(factor)}
end

def factors(num)
    fact = []
    (2..num).each {|number| fact<<number if num%number==0}
    fact
end
p coprime?(25, 12)    # => true
p coprime?(7, 11)     # => true
p coprime?(30, 9)     # => false
p coprime?(6, 24)     # => false


