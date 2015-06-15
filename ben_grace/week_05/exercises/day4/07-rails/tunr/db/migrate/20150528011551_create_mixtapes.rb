class CreateMixtapes < ActiveRecord::Migration
  def change
    create_table :mixtapes do |t|
      t.text :name
      t.integer :user_id
      #Must be called user_id so that the magic works linking it to user
      t.timestamps
    end
  end
end
