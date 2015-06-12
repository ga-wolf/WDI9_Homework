class Gods < ActiveRecord::Migration
  def change
    create_table :gods do |t|
      t.string :name
      t.text :image
      t.text :description
      t.string :faction
      t.string :symbol
      t.integer :children

      t.timestamps
    end
  end
end
