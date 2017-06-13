class ProjectRolesUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :project_roles_users, id: false do |t|
      t.references :project, foreign_key: true, type: :uuid, index: true, null: false
      t.references :user, foreign_key: true, type: :uuid, index: true, null: false
    end
  end
end
