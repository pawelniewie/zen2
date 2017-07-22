class AddStatusIdToIssues < ActiveRecord::Migration[5.1]
  safety_assured
  
  def change
    add_reference :issues, :status, foreign_key: true, index: true
  end
end
