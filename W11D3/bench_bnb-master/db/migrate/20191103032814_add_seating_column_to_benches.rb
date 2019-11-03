class AddSeatingColumnToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :seating, :integer, default: 0
  end
end
