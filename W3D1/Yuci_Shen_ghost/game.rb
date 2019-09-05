require_relative 'player'
class Game
    attr_reader :losses
    
    #init. an array of player instances based off of an array of names
    #init. a hash counter that counts the number of losses for each player
    #init. current and previous indices that correspond to players in the array
    #init. fragment holding the guessed word
    #init. a dictionary by reading in words from a file, then mapping to a Hash
    def initialize(names)
        @players = []
        @losses = {}
        names.length.times do |i| 
            @players << Player.new(names[i])
            @losses[@players[i]] = 0
        end

        @current_index = 0
        @previous_idx = -1
        @fragment = ""

        file = File.open('dictionary.txt')
        words = file.readlines.map(&:chomp) 
        file.close

        @dictionary = Hash.new(false)
        words.each { |word| @dictionary[word] = true }
    end

    #calls take_turn to make the current player make a move
    #if the move results in a win, increment other players' losses by 1 and reset fragment
    #move to next player
    def play_round
        self.take_turn?(@players[@current_index])
        if @dictionary[fragment]
            fragment = ""
            @players.each do |player|
                if player != @players[@current_index]
                    self.losses[player] += 1
                end
            end
        end
        self.next_player!
    end

    #keeps calling player.get_move until we get a valid input
    #then add the valid input to fragment
    def take_turn(player)
        move = nil 
        until move
            input = player.get_move
            valid_play?(input) ? move = input : player.alert_invalid_guess
        end
        fragment << move
    end

    #checks if an input is valid, in other words:
    #   1. is it an alphabet character
    #   2. can fragment still grow into a valid word if we added the input
    def valid_play?(input)
        alphabet = ('a'..'z').to_a
        return false if !alphabet.include?(input)

        words = @dictionary.keys
        words.any? { |word| word.start_with?(@fragment + input) }
    end

    #updates the current and previous player indices
    #   increment current_index until it lands on a player with less than 5 losses
    def next_player!
        @previous_idx = @current_index
        @current_index = (@current_index + 1) % @players.length

        until self.losses[@players[@current_index]] < 5
            @current_index = (@current_index + 1) % @players.length
        end
    end

    #returns the "GHOST" substring representing a player's losses
    def record(player)
        "GHOST"[0...self.losses[player]]
    end

    #prints out each player's name and "GHOST" substring
    def display_standings
        self.losses.each do |player, loss| 
            puts "#{player}: #{self.record(player)}"
        end
    end

    #keeps calling play_round until only one player has less than 5 losses
    def run 
        ended = @losses.values.one? { |value| value < 5 }
        self.play_round until ended
    end
end