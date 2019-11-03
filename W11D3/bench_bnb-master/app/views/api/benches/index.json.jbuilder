# json.array! @benches do |bench, idx|
#   json.extract! bench, :description, :lat, :lng
# end

@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :lat, :lng, :seating
  end
end