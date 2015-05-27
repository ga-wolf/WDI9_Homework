class CreatePlanets < ActiveRecord::Migration
  def change
    create_table :planets do |t|
      t.string :name
      t.string :orbit
      t.string :mass
      t.string :radius
      t.text :image
      t.timestamps
    end
  end
end
