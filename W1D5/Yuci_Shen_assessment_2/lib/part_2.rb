def proper_factors (number)
    (1...number).select { |divider| number % divider == 0 }
end

def aliquot_sum(number)
    proper_factors(number).sum
end

def perfect_number?(number)
    number == aliquot_sum(number)
end

def ideal_numbers(n)
    ideal = []
    i = 1
    while ideal.length != n
        ideal << i if perfect_number?(i)
        i += 1
    end
    ideal
end