class NotNullColumnsInComments < ActiveRecord::Migration[5.0]
  def change
    change_column_null :comments, :author_id, false
    change_column_null :comments, :issue_id, false
    change_column_null :comments, :body, false
  end
end
