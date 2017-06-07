class AttachmentReferences < ActiveRecord::Migration[5.1]
  def change
    add_reference :attachments, :organization, type: :uuid, foreign_key: true
    add_reference :attachments, :issue, type: :uuid, foreign_key: true
    add_reference :attachments, :user, type: :uuid, foreign_key: true
  end
end
