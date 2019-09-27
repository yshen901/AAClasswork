class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      # t.bigint :likeable_id
      # t.string :likeable_type
      t.references :likeable, polymorphic: true, null: false
      t.timestamps
    end
  end
end
