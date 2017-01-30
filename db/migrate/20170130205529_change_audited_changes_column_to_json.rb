class ChangeAuditedChangesColumnToJson < ActiveRecord::Migration[5.0]
  def change
    execute 'DELETE FROM audits'
    change_column :audits, :audited_changes, "JSONB USING audited_changes::JSONB"
  end
end
