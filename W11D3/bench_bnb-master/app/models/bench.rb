class Bench < ApplicationRecord
  validates :description, :lat, :lng, :seating, presence: true

  # bounds = 
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  def self.in_bounds(bounds)
    # bounds = {
    #   "northEast" => {"lat"=>"37.80971", "lng"=>"-122.39208"}, 
    #   "southWest" => {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }

    benches = self.all
    selected = benches.select do |bench|
       bench["lat"] < bounds["northEast"]["lat"].to_f && 
       bench["lat"] > bounds["southWest"]["lat"].to_f &&
       bench["lng"] < bounds["northEast"]["lng"].to_f && 
       bench['lng'] > bounds["southWest"]["lng"].to_f
    end
  end
end
