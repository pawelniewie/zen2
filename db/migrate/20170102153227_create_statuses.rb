class CreateStatuses < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_table :statuses do |t|
      t.string :name
      t.integer :position
      t.string :category

      t.references :project, type: :uuid, foreign_key: true, index: true

      t.timestamps
    end

    add_index :statuses, [:name, :project_id], unique: true
  end
end
