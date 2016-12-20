class IndexNameOnProjects < ActiveRecord::Migration[5.0]
  disable_ddl_transaction!

  def change
    add_index :projects, [:name, :organization_id], unique: true, algorithm: :concurrently
  end
end
