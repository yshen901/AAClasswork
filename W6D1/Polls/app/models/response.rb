# == Schema Information
#
# Table name: responses
#
#  id               :bigint           not null, primary key
#  answer_choice_id :integer          not null
#  respondent_id    :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Response < ApplicationRecord

  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of
  # :answer_choice and :respondent out here.

  # Remember, belongs_to is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.

  # belongs_to (:association_name, {....} )
  # belongs_to :association_name, {:primary_key => :id, :foreign_key => :foreign_id, :class_name => :name }
  # belongs_to :association_name, rimary_key: :id, foreign_key: :foreign_id, class_name: :name


  belongs_to :user,
    primary_key: :id,
    foreign_key: :respondent_id,
    class_name: :User
  
  belongs_to :answer_choice,
    primary_key: :id, 
    foreign_id: :answer_choice_id,
    class_name: :AnswerChoice
  
end
