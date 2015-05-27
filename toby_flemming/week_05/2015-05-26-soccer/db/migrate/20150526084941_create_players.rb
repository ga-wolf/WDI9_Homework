class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.integer :height
      t.float :weight
      t.string :position
      t.string :foot

      t.timestamps null: false
    end
  end
end
