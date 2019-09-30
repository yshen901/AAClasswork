class Cat < ApplicationRecord
  # include ActionView::DateHelpers
  VALID_COLORS = %w(brown black orange white grey).freeze
  validates :birth_date, :color, :name, :sex, :description, presence: true 
  validates :sex, inclusion: { in: ['M', 'F'], message: "%{value} is not a valid sex" }
  validates :color, inclusion: { in: VALID_COLORS, message: "%{value} is not a valid color" }


  # Asssocations
  has_many :rental_requests, 
    foreign_key: :cat_id,
    class_name: :CatRentalRequest,
    dependent: :destroy



   # Methods
  def age 
    # select_date(Time.now, order: [:year, :month, :date], date_separator: '/')
    # Time.now + 4.days
    # check if current month is >= the month
    # Extract the year
    # Extract day
    # extract month
    404
  end

end
