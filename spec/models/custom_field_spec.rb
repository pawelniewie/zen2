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
#
# Indexes
#
#  index_custom_fields_on_organization_id  (organization_id)
#

require 'rails_helper'

RSpec.describe CustomField, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
