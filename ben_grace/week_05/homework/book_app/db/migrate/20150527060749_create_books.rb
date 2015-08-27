class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :genre
      t.date :release_date
      t.text :blurb

      t.timestamps
    end
  end
end
