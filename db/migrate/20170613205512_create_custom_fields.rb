class CreateCustomFields < ActiveRecord::Migration[5.1]
	safety_assured
	
  def change
    create_table :custom_fields, id: :uuid, default: -> { "uuid_generate_v4()" } do |t|
      t.text :name, null: false
      t.text :field_type, null: false
      t.text :owner_type, null: false
      t.uuid :owner_id, null: false
      t.jsonb :configuration, null: false, default: {}
      t.timestamps
    end

    add_reference :custom_fields, :organization, type: :uuid, foreign_key: true, null: false
    add_reference :custom_fields, :project, type: :uuid, foreign_key: true, null: false

    add_index :custom_fields, [:name, :project_id], unique: true
  end
end
