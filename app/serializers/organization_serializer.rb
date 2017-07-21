class OrganizationSerializer < ApplicationSerializer
	attributes :id, :slug, :name
	
	attribute :url do
		instance_options[:location]
	end
end
