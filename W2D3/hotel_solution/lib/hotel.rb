require_relative "room"

class Hotel
  def initialize(name, hash)
    @name = name

    @rooms = {}

    hash.each do |room_name, capacity|
      @rooms[room_name] = Room.new(capacity)
    end
  end

  def name
    @name.split.map(&:capitalize).join(" ")
  end

  def rooms
    @rooms
  end

  def room_exists?(room_name)
    @rooms.has_key?(room_name)
  end

  def check_in(person, room_name)
    if !self.room_exists?(room_name)
      puts "sorry, room does not exist"
      return
    end

    success = @rooms[room_name].add_occupant(person)
    if success
      puts "check in successful"
    else
      puts "sorry, room is full"
    end
  end

  def has_vacancy?
    @rooms.values.any? { |room| !room.full? }
  end

  def list_rooms
    @rooms.each { |name, room| puts "#{name} : #{room.available_space}" }
  end
end
