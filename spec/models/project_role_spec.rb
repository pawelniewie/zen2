# == Schema Information
#
# Table name: project_roles
#
#  id              :uuid             not null, primary key
#  name            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :uuid             not null
#  project_id      :uuid             not null
#
# Indexes
#
#  index_project_roles_on_name_and_project_id  (name,project_id) UNIQUE
#  index_project_roles_on_organization_id      (organization_id)
#  index_project_roles_on_project_id           (project_id)
#

require 'rails_helper'

RSpec.describe ProjectRole, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
