class CreateOceans < ActiveRecord::Migration
  def change
    create_table :oceans do |t|
      t.string :name
      t.text :image
      t.float :depth
      t.string :location
      t.string :climate
      t.text :life_forms
      t.string :time_period

      t.timestamps
    end
  end
end
