class AddOrganizationToUsers < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    add_reference :users, :organization, type: :uuid, foreign_key: true
  end
end
