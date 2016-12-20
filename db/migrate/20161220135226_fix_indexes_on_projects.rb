class FixIndexesOnProjects < ActiveRecord::Migration[5.0]
  disable_ddl_transaction!

  safety_assured

  def change
    remove_index :projects, :name
    remove_index :projects, :key
  end
end
