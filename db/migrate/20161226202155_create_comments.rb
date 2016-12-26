class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :body
      t.references :author, type: :uuid, foreign_key: {to_table: :users}, index: true
      t.references :issue, type: :uuid, foreign_key: true, index: true

      t.timestamps
    end
  end
end
