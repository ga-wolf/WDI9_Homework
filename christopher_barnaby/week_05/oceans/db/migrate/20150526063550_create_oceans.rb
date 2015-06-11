class CreateOceans < ActiveRecord::Migration
  def change
    create_table :oceans do |t|
      t.string :name
      t.text :image
      t.string :hemisphere
      t.float :volume
      t.float :maximum_depth
      t.string :deepest_point
      t.timestamps
    end
  end
end
