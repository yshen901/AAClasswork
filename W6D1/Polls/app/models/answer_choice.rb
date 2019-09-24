# == Schema Information
#
# Table name: answer_choices
#
#  id          :bigint           not null, primary key
#  text        :string           not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class AnswerChoice < ApplicationRecord
  validates :text, presence: true

  # N.B. Remember, Rails 5 automatically validates the presence of
  # belongs_to associations, so we can leave the validation of :question out here.

  # Remember, belongs_to is just a method where the first argument is
  # the name of the association, and the second argument is an options
  # hash.

  has_many :responses,
    primary_key: :id, 
    foreign_key: :answer_choice_id,
    class_name: :Response

  belongs_to :question,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Question

end
