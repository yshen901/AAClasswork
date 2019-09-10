class Card
    #face_value returns @face_value and to_s returns what the board will print
    #in my opinion, this is more intuitive
    attr_reader :face_up, :face_value

    def initialize(face_value)
        @face_value = face_value
        @face_up = false
    end

    def hide
        @face_up = false
    end

    def reveal
        @face_up = true
    end

    #returns face_value if the card is face-up, otherwise returns a space
    def to_s
        @face_up ? @face_value.to_s : " "
    end

    def ==(other_card)
        self.to_s == other_card.to_s
    end
end
