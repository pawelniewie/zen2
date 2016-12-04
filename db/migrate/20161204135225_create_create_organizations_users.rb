class CreateCreateOrganizationsUsers < ActiveRecord::Migration[5.0]
  def change
    create_join_table :users, :organizations do |t|
      t.index :organization_id
      t.index :user_id
    end
  end
end
