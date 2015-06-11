class CreateMoons < ActiveRecord::Migration
  def change
    create_table :moons do |t|
      t.string :name
      t.string :orbit
      t.string :mass
      t.string :planet
      t.string :radius
      t.text :image
      t.timestamps
    end
  end
end
