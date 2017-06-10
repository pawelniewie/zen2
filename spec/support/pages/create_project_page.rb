module Pages
	
	class CreateProject < SitePrism::Page
		set_url '/projects/new'
		
		element :name, '#project-name-id'
		element :key, '#project-key-id'
		element :create, '.create-project-form .button__primary'
		
		load_validation do
			has_name? && has_key?
		end
		
		def create_project
			create.click
			ProjectsPage::new
		end
	end
	
end
