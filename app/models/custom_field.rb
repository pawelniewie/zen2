# == Schema Information
#
# Table name: custom_fields
#
#  id              :uuid             not null, primary key
#  name            :text             not null
#  field_type      :text             not null
#  owner_type      :text             not null
#  owner_id        :uuid             not null
#  configuration   :jsonb            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  organization_id :uuid             not null
#  project_id      :uuid             not null
#
# Indexes
#
#  index_custom_fields_on_name_and_project_id  (name,project_id) UNIQUE
#  index_custom_fields_on_organization_id      (organization_id)
#  index_custom_fields_on_project_id           (project_id)
#

class CustomField < ApplicationRecord
end
