# PHASE 2
def convert_to_int(str)
  Integer(str)
rescue TypeError #this works somehow
  nil
rescue ArgumentError
  nil
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

class CoffeeError < StandardError ; end


def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
    raise CoffeeError, "Bleh, I don't like coffee, try again"
  else 
    raise StandardError 
  end 
end

def feed_me_a_fruit
  begin
    puts "Hello, I am a friendly monster. :)"

    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeError
    puts "This isn't a fruit, but I'll give you another chance"
    retry
  end
end 

# PHASE 4
class YearsKnownError < StandardError; end
class FriendNameError < StandardError; end
class PastimeError < StandardError; end
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    raise YearsKnownError, "You haven't known me long enough to be a best friend. Come back in a few years" if yrs_known < 5
    raise PastimeError, "You need a pastime" if fav_pastime.length <= 0
    raise FriendNameError, "You don't have a name?" if name.length <= 0

    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


