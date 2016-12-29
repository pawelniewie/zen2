class AddUsernameToUsers < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    add_column :users, :username, :string
    add_index :users, [:username, :organization_id], unique: true
    change_column_null :users, :username, false, -> { 'email' }
  end
end
