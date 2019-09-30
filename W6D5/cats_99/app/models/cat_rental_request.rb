class CatRentalRequest < ApplicationRecord
  # validations and validate

  validates :status, inclusion: { in: %w[PENDING APPROVED DENIED] } 
  validates :status, :start_date, :end_date, :cat_id, presence: true 

  # Associations

  belongs_to :cat, 
    foreign_key: :cat_id,
    class_name: :Cat

  # Custom Validation

  # get all overlapping_requests:
  def overlapping_requests 
    # Get all requests on same cat 
    # 
    # Return an AR relation
  end

end
