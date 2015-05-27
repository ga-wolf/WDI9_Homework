class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :category
      t.integer :isbn
      t.date :pub_date
      t.text :blurb
      t.text :image
      t.timestamps
    end
  end
end