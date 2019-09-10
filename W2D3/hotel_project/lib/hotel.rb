require_relative "room"

class Hotel
    attr_reader :rooms
    def initialize (name, room_names)
        @name = name
        @rooms = {}
        room_names.each { |name, cap| @rooms[name] = Room.new(cap) }
    end

    def name
        words = @name.split(" ")
        words.map(&:capitalize)
             .join(" ")
    end

    def room_exists? (room_name)
        @rooms.has_key?(room_name)
    end

    def check_in (person, room)
        if !self.room_exists?(room)
            puts 'sorry, room does not exist'
            return
        end
        if @rooms[room].add_occupant(person)
            puts 'check in successful' 
        else
            puts 'sorry,room is full'
        end
    end

    def has_vacancy?
        @rooms.any? { |name, room| !room.full? }
    end

    def list_rooms
        @rooms.each { |name, room| puts "#{name} #{room.available_space}"}
    end
end
