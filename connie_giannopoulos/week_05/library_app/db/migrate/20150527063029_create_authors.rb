class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.integer :age
      t.string :bio
      t.timestamps
    end
  end
end