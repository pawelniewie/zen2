class FixCreateOrganizationsUsers < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    drop_join_table :users, :organizations
    create_join_table :users, :organizations, { column_options: { type: :uuid } } do |t|
      t.index :organization_id
      t.index :user_id
    end
  end
end
