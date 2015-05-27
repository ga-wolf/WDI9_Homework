class CreateRivers < ActiveRecord::Migration
  def change
    create_table :rivers do |t|
      t.string :name
      t.text  :image
      t.text  :mouth
      t.text  :source
      t.text :location
      t.float :length
      t.float :width

      t.timestamps

    end
  end
end
