class CreateOrganizations < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_table :organizations, id: :uuid do |t|
      t.string :name
      t.string :slug

      t.timestamps
    end
  end
end
