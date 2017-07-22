require 'rails_helper'

RSpec.feature 'creating an organization' do
	it 'works' do
		expect do
			Pages::CreateOrganization.new.load do |page|
				page.organization_name.set('Another')
				page.organization_slug.set('another')
				
				page.first_name.set('Pawel')
				page.last_name.set('Smith')
				page.password.set('password')
				page.email.set('no@such.email')
				
				projects_page = page.create_organization
				expect(projects_page).to be_loaded
			end
		end.to change { ActionMailer::Base.deliveries.size }.by(1)
	end
end
