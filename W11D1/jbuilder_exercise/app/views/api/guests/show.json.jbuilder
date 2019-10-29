# { name: ..., age: ..., favorite_color: ... }
# json.extract! @guest, :name, :age, :favorite_color

# groups data with "do"
# NOTE: IF UR USING RSPEC, DO RAILS DB:MIGRATE DB:TEST:LOAD OR THE TEST
#       DATABASE WILL BE EMPTY. LOCALHOST USES DEVELOPMENT, SPEC USES TEST.

json.partial! 'api/guests/guest', guest: @guest

json.gifts do 
  json.array! @guest.gifts do |gift|
    json.title gift.title
    json.description gift.description
  end
end