class CreateTeamsUsers < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    create_join_table :teams, :users
  end
end
