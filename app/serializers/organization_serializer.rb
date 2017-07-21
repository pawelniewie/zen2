# == Schema Information
#
# Table name: organizations
#
#  id         :uuid             not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_organizations_on_slug  (slug) UNIQUE
#

class OrganizationSerializer < ApplicationSerializer
	attributes :id, :slug, :name
	
	attribute :url do
		instance_options[:location]
	end
end
