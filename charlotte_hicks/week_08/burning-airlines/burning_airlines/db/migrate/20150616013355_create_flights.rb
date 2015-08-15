class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.integer :flight_no
      t.string :departure
      t.string :destination
      t.string :date
      t.integer :plane_id

      t.timestamps null: false
    end
  end
end
