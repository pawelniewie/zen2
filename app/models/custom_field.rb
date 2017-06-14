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

class CustomField < ApplicationRecord
	acts_as_tenant :organization
	
	belongs_to :owner, polymorphic: true
	
	has_many :values, class_name: "CustomFieldValue", dependent: :delete_all
	
	validates :field_type, presence: true, inclusion: { in: CustomFieldType.all }
	
	before_create :set_organization
	
	private
	
	def set_organization
		if self.owner and self.owner.respond_to?(:organization)
			self.organization = self.owner.organization
		end
	end
end
