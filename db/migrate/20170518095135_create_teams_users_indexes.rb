class CreateTeamsUsersIndexes < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    add_index :teams_users, [:team_id, :user_id], unique: true
    add_index :teams_users, :user_id
  end
end
