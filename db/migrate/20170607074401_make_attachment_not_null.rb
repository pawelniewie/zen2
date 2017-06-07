class MakeAttachmentNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :attachments, :attachment_file_name, false
    change_column_null :attachments, :attachment_content_type, false
    change_column_null :attachments, :attachment_file_size, false
    change_column_null :attachments, :attachment_updated_at, false
  end
end
