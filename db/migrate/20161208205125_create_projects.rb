class CreateProjects < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_table :projects, id: :uuid do |t|
      t.string :name, null: false
      t.string :key, null: false

      t.timestamps
    end
    add_index :projects, :name, unique: true
    add_index :projects, :key, unique: true
    add_reference :projects, :organization, type: :uuid, foreign_key: true
  end
end
