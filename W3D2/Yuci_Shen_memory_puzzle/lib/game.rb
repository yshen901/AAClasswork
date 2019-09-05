require_relative "board.rb"
require_relative "human_player.rb"
require_relative "computer_player.rb"

class Game
    def initialize(size)
        @player = ComputerPlayer.new
        @board = Board.new(size)
        @board.populate
    end

    #runs the game, playing rounds until the game is won
    def run
        @board.render_all
        sleep(2)
        self.play_round until @board.won?
        puts "YOU WIN!!!"
    end

    #prompts the player for a position until we get a position that is
    #   1) inside the boundary and 2) points to a facedown card
    def valid_prompt
        pos = @player.prompt(@board.size)
        until pos.all?{|n| n.between?(0, @board.size-1)} && !@board[pos].face_up
            pos = @player.prompt(@board.size)
        end
        pos
    end

    #refreshes by clearing then rendering
    def refresh
        system("clear")
        @board.render
    end

    #gets a guess, reveals & returns the card, then refreshes the board display
    def make_guess
        guessed_pos = self.valid_prompt
        card = @board.reveal(guessed_pos)
        @player.receive_revealed_card(guessed_pos, card.face_value)

        self.refresh
        card
    end

    #gets and evaluates a round of guesses, then refreshes the board display
    def play_round
        self.refresh

        card_1 = self.make_guess
        card_2 = self.make_guess

        if card_1 == card_2
            puts "It's a match!"
            @player.receive_match(card_1.face_value)
        else
            puts "Try again."
            card_1.hide
            card_2.hide
        end
        sleep(2)
    end
end
