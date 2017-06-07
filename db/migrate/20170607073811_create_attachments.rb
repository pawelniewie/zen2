class CreateAttachments < ActiveRecord::Migration[5.1]
  def change
    create_table :attachments, id: :uuid, default: -> { "uuid_generate_v4()" } do |t|
      t.timestamps
    end
    add_attachment :attachments, :attachment
  end
end
