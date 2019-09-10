require_relative "passenger"

class Flight
    attr_reader :passengers

    def initialize(flight_num, capacity)
        @flight_number = flight_num
        @capacity = capacity
        @passengers = []
    end

    def full?
        @passengers.length == @capacity
    end

    def board_passenger(passenger)
        return if full? || !passenger.has_flight?(@flight_number)
        @passengers << passenger
    end

    def list_passengers
        @passengers.map { |passenger| passenger.name }
    end

    def [] (index)
        @passengers[index]
    end

    def << (passenger)
        self.board_passenger(passenger)
    end
end
