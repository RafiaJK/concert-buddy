class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :bio
      t.string :photo
      t.string :email
      t.string :instagram
      t.string :twitter
      t.timestamps
    end
  end
end
