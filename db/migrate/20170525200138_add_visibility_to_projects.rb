class AddVisibilityToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :visibility, :integer
  end
end
