class FixTeamsUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :teams_users
    
    create_table :teams_users, id: false do |t|
      t.references :team, foreign_key: true, type: :uuid, index: true, null: false
      t.references :user, foreign_key: true, type: :uuid, index: true, null: false
    end
  end
end
