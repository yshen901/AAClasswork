class ComputerPlayer
    #known_cards: card => array of positions this card has been found in
    #matched_chards: an array recording matched cards
    def initialize
        @known_cards = Hash.new { |h, k| h[k] = [] }
        @matched_cards = [] #pairs you've already matched
        @previous_guess = nil
    end

    #1) we already returned the first pos of a known pair, return the second pos
    #2) there is an unmatched known pair, return the first known pos
    #3) otherwise guess a random unknown pos (pos not in @known_cards)
    def prompt(size)
        # CASE 1
        unless @previous_guess == nil
            guessed_pos = @known_cards[@previous_guess][1]
            @previous_guess = nil
            return guessed_pos
        end

        # CASE 2
        @known_cards.each do |card, positions|
            if positions.length == 2 && !@matched_cards.include?(card)
                @previous_guess = card
                return positions[0]
            end
        end
        
        #CASE 3
        known_pos = []
        @known_cards.values.each do |positions|
            positions.each { |position| known_pos << position }
        end
        known_pos = known_pos.to_set

        guessed_pos = [rand(0...size), rand(0...size)]
        while known_pos.include?(guessed_pos)
            guessed_pos = [rand(0...size), rand(0...size)]
        end
        guessed_pos
    end

    #adds newly discovered positions to a known card's array of positions
    def receive_revealed_card(pos, card)
        @known_cards[card] << pos unless @known_cards[card].include?(pos)
    end

    #adds newly matched cards to the list of matched cards
    def receive_match(card)
        @matched_cards << card unless @matched_cards.include?(card)
    end
end
