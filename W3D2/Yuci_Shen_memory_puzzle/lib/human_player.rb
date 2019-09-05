class HumanPlayer
    def prompt(size)
        puts "Please enter the position of the card you'd like to flip (e.g. '2,3')"
        gets.chomp.split(",").map(&:to_i)
    end

    def receive_match(card)
    end

    def receive_revealed_card(pos,card)
    end
end
