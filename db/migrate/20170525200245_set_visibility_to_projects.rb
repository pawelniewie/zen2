class SetVisibilityToProjects < ActiveRecord::Migration[5.0]
  def change
    change_column_null :projects, :visibility, false, 0
  end
end
