require 'rails_helper'

RSpec.feature 'creating project', organization: :atlas do
	let (:user) { users(:joe) }
	
	before { login(user) }
	
	it 'works' do
		Pages::CreateProject.new.load do |project_page|
			project_page.name.set('Another')
			project_page.key.set('ANO')
			projects_page = project_page.create_project
			expect(projects_page).to_not be_loaded
		end
	end
end
