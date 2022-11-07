class CreateShows < ActiveRecord::Migration[7.0]
  def change
    create_table :shows do |t|
      t.string :venue
      t.date :date
      t.integer :user_id
      t.integer :artist_id
      t.timestamps
    end
  end
end
