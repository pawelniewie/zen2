require 'rails_helper'

RSpec.feature 'creating project', organization: :atlas do
	let (:user) { users(:joe) }
	
	before { login(user) }
	
	it 'works' do
		Pages::CreateProject.new.load do |project_page|
			project_page.name.set('Another')
			expect(project_page.key.value).to eq 'ANO'
			projects_page = project_page.create_project
			expect(projects_page).to be_loaded
		end
	end
	
	xit 'reports errors', skip: 'Need to fix Apollo first' do
		Pages::CreateProject.new.load do |project_page|
			project_page.name.set('Test')
			project_page.key.set('')
			expect(project_page.key.value).to eq ''
			projects_page = project_page.create_project_with_errors
			expect(projects_page).to have_form_errors
			
			project_page.name.set('')
			project_page.key.set('XYZ')
			expect(project_page.name.value).to eq ''
			projects_page = project_page.create_project_with_errors
			expect(projects_page).to have_form_errors
		end
	end
end
