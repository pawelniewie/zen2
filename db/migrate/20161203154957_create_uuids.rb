class CreateUuids < ActiveRecord::Migration
  safety_assured

  def change
    enable_extension 'uuid-ossp'
  end
end
