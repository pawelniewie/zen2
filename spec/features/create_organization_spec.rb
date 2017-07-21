require 'rails_helper'

RSpec.feature 'creating an organization' do
	xit 'works' do
		Pages::CreateOrganization.new.load do |page|
			page.organization_name.set('Another')
			page.organization_slug.set('another')
			projects_page = page.create_organization
			expect(projects_page).to be_loaded
		end
	end
end
