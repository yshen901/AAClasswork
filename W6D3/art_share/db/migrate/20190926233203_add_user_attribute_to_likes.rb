class AddUserAttributeToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :user_id, :bigint
  end
end
