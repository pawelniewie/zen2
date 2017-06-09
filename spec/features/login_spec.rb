require 'rails_helper'

RSpec.feature 'login' do
	let (:user) { users(:joe) }
	let (:organization) { organizations(:atlas) }
	
	it 'works' do
		visit_organization(organization, '/') do
			login_page = LoginPage.new
			login_page.load
			
			expect(login_page).to be_displayed
			
			login_page.login = user.email
			login_page.password = 'pas1sword'
			
			projects_page = login_page.login_to_default_page
			expect(login_page).to_not be_displayed
			expect(projects_page).to be_visible
		end
	end
end
