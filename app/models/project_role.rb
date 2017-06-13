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

class ProjectRole < ApplicationRecord
	acts_as_tenant :organization
	
	belongs_to :project
	
	validates :name, presence: true, uniqueness: { scope: :project_id }
end
