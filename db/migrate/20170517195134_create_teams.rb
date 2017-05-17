class CreateTeams < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_table :teams, id: :uuid  do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_reference :teams, :organization, type: :uuid, foreign_key: true

    add_index :teams, [:name, :organization_id], unique: true
  end
end
