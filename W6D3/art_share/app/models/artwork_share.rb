# == Schema Information
#
# Table name: artwork_shares
#
#  id         :bigint           not null, primary key
#  artwork_id :bigint           not null
#  viewer_id  :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ArtworkShare < ApplicationRecord
  validates :artwork_id, :viewer_id, presence: true

  belongs_to :viewer,
    foreign_key: :viewer_id,
    class_name: :User

  belongs_to :artwork #don't need foreign key or class name if name is same as association name
end
