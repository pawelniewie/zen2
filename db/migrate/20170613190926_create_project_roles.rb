class CreateProjectRoles < ActiveRecord::Migration[5.1]
  safety_assured
  
  def change
    create_table :project_roles, id: :uuid, default: -> { "uuid_generate_v4()" } do |t|
      t.text :name, null: false
      t.timestamps
    end

    add_reference :project_roles, :organization, type: :uuid, foreign_key: true

    add_index :project_roles, [:name, :organization_id], unique: true
  end
end
