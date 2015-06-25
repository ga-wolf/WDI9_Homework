class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.date :date_of_publication
      t.string :publisher
      t.text :synopsis
      t.text :image
      t.integer :author_id
      t.timestamps
    end
  end
end
