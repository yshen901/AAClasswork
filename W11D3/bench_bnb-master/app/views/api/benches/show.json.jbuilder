json.set! @bench.id do
  json.extract! @bench, :id, :description, :lat, :lng, :seating
end