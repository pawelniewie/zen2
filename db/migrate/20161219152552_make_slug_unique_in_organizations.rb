class MakeSlugUniqueInOrganizations < ActiveRecord::Migration[5.0]
  disable_ddl_transaction!

  def change
    add_index :organizations, :slug, unique: true, algorithm: :concurrently
  end
end
