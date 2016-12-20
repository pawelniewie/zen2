class CreateIssues < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_table :issues, id: :uuid do |t|
      t.integer :no, null: false
      t.string :summary, null: false
      t.text :description
    end

    add_reference :issues, :project, type: :uuid, foreign_key: true
    add_reference :issues, :organization, type: :uuid, foreign_key: true

    add_reference :issues, :assignee, type: :uuid, foreign_key: {to_table: :users}
    add_reference :issues, :reporter, type: :uuid, foreign_key: {to_table: :users}

    add_index :issues, [:no, :project_id], unique: true
  end
end
