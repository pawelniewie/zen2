class CreateIssueTypes < ActiveRecord::Migration[5.0]
  safety_assured
  
  def change
    create_table :issue_types do |t|
      t.string :name, null: false
      t.integer :position, null: false
      t.string :color, null: false

      t.references :project, type: :uuid, foreign_key: true, index: true, null: false

      t.timestamps
    end

    add_index :issue_types, [:name, :project_id], unique: true
  end
end
