class DropProjectFromCustomFields < ActiveRecord::Migration[5.1]
  def change
    remove_reference :custom_fields, :project
  end
end
