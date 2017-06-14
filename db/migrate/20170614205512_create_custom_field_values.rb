class CreateCustomFieldValues < ActiveRecord::Migration[5.1]
	safety_assured
	
  def change
    create_table :custom_field_values, id: :uuid, default: -> { "uuid_generate_v4()" } do |t|
      t.text :owner_type, null: false
      t.uuid :owner_id, null: false
      t.jsonb :value, null: false, default: {}
      t.timestamps
    end

    add_reference :custom_field_values, :organization, type: :uuid, foreign_key: true, null: false
  end
end
