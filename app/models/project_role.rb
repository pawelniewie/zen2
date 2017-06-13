# == Schema Information
#
# Table name: project_roles
#
#  id              :uuid             not null, primary key
#  name            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :uuid
#
# Indexes
#
#  index_project_roles_on_name_and_organization_id  (name,organization_id) UNIQUE
#  index_project_roles_on_organization_id           (organization_id)
#

class ProjectRole < ApplicationRecord
	acts_as_tenant :organization
	
	validates_uniqueness_to_tenant [:name]
end
