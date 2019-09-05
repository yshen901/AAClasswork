require_relative "game.rb"

puts "Enter a size for the board <= 10"
size = gets.chomp.to_i

until size.is_a?(Integer) && size <= 10
    puts "Enter a valid number for the size of the board <= 10"
    size = gets.chomp.to_i
end

game = Game.new(size)

game.play

puts "YOU WIN!!!"