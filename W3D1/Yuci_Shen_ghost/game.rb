require_relative 'player'
class Game
    attr_reader :losses
    
    #I used previous_idx to find the winner of a round/game as we go to next
    #player before we check winner
    def initialize(names)
        @players = []
        @losses = {}
        names.length.times do |i| 
            @players << Player.new(names[i])
            @losses[@players[i]] = 0
        end

        @fragment = ""
        @current_idx = 0
        @previous_idx = -1

        @dictionary = Hash.new (false)
        words = File.readlines('dictionary.txt').map(&:chomp)
        words.each { |word| @dictionary[word] = true }
    end

    def run
        play_round until game_won?
        display_standings
        puts "#{@players[@previous_idx]} wins!"
    end

    def play_round
        @fragment = ""
        until round_won?
            take_turn
            next_player!
        end

        record_losses
        display_standings
        puts "#{@players[@previous_idx]} wins this round!"
        sleep(3)
    end

    def take_turn
        player = @players[@current_idx]

        move = nil 
        until move
            display_turn_information
            input = player.get_move
            valid_play?(input) ? move = input : player.alert_invalid_guess
            sleep(1)
        end

        @fragment << move
    end

    def record_losses
        @players.each do |player|
            @losses[player] += 1 unless player == @players[@previous_idx]
        end
    end

    def round_won?
        @dictionary[@fragment]
    end

    def game_won?
        @losses.one? { |_,num| num < 5 }
    end

    def valid_play?(input)
        alphabet = ('a'..'z').to_a
        return false if !alphabet.include?(input)

        @dictionary.any? { |word,_| word.start_with?(@fragment + input) }
    end

    def next_player!
        @previous_idx = @current_idx
        @current_idx = (@current_idx + 1) % @players.length

        until self.losses[@players[@current_idx]] < 5
            @current_idx = (@current_idx + 1) % @players.length
        end
    end

    def display_turn_information
        system("clear")
        puts "So far we have: #{@fragment}"
        puts "It is #{@players[@current_idx].to_s}'s turn!'"
    end

    def display_standings
        system("clear")
        self.losses.each do |player, loss| 
            puts "#{player}: #{self.losses_to_ghost(player)}"
        end
    end

    def losses_to_ghost(player)
        "GHOST"[0...self.losses[player]]
    end
end