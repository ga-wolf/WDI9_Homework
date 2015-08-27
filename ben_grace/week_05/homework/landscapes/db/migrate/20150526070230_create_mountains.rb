class CreateMountains < ActiveRecord::Migration
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :country
      t.text :image
      t.float :height
      t.integer :climbers_killed
    end
  end
end
