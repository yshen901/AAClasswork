class Player
    attr_reader :name

    #initializes the player instance with a name
    def initialize (name)
        @name = name
    end

    #gets a move from the player
    def get_move
        print "Please enter guess (alpha only): "
        gets.chomp.downcase
    end

    #tells the player that the guess was wrong
    def alert_invalid_guess
        puts "Guess is invalid, please try again"
    end

    def to_s
        @name.to_s
    end
end