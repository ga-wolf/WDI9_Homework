class CreateRockets < ActiveRecord::Migration
  def change
    create_table :rockets do |t|
      t.string :name
      t.string :designer
      t.text :image
      t.float :year
      t.float :thrust
      t.float :mass
      t.float :height
      t.float :delV
      t.float :crew
      t.float :payload
      t.float :cost
      t.text :description

      t.timestamps
    end
  end
end
