require 'rails_helper'

RSpec.feature 'login', organization: :atlas do
	let (:user) { users(:joe) }
	
	it 'works' do
		login_page = Pages::LoginPage.new
		login_page.load
		
		expect(login_page).to be_loaded
		
		login_page.login.set(user.email)
		login_page.password.set('password')
		
		projects_page = login_page.login_to_default_page
		expect(projects_page).to be_loaded
	end
end
