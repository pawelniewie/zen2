class AddTimestampsToIssues < ActiveRecord::Migration[5.0]
  safety_assured

  def change
    add_column :issues, :created_at, :datetime, null: false, default: Time.now
    add_column :issues, :updated_at, :datetime, null: false, default: Time.now
  end
end
