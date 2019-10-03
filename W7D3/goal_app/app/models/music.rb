class Music < ApplicationRecord
  validates :title, :author, presence: true

  #given the scope of a specific author, all title should be unique
  validates :title, uniqueness: { scope: :author }
end
