class IndexKeyOnProjects < ActiveRecord::Migration[5.0]
  disable_ddl_transaction!

  def change
    add_index :projects, [:key, :organization_id], unique: true, algorithm: :concurrently
  end
end
