class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :isdn
      t.date :publication
      t.string :genre
      t.text :image
      t.integer :author_id
      
      t.timestamps
    end
  end
end
