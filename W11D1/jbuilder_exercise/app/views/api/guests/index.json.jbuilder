# The url refers to views/api/guests/_guest
# can be 'api/guests/guest' or just 'guest'
json.array! @guests do |guest|
  if guest.age.between?(40, 50)
    json.partial! 'guest', guest: guest #alias
  end
end


# No Partials
# json.array! @guests do |guest|
#   json.name guest.name
#   json.age guest.age
#   json.favorite_color guest.favorite_color
# end

# Method 1
# json.array! @guests do |guest|
#   # json.extract! guest, :name, :age, :favorite_color
# end

# Method 2
# json.array! @guests, :name, :age, :favorite_color

# Alternate example for nesting
# json.array! @guests do |guest|
#   json.body comment.body
#   json.author do
#     json.first_name guest.first_name
#     json.last_name guest.last_name
#   end 
# end