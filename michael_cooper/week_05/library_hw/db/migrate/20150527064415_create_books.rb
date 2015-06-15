class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.string :year
      t.text :cover
      t.integer :author_id
      t.timestamps
    end
  end
end
