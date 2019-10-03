class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.string :title, null: false
      t.string :author, null: false

      t.timestamps
    end
    add_index :musics, [:title, :author], unique: true
  end
end
