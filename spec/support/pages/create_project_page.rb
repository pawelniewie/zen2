require_relative './field_errors_section'

module Pages
	
	class CreateProject < SitePrism::Page
		set_url '/projects/new'
		
		element :name, 'input[name=name]'
		element :key, 'input[name=key]'
		element :create, 'form .ui.primary.button'
		
		sections :form_errors, ::Pages::FieldErrorsSection, "form [data-field-name]"
		
		load_validation do
			has_name? && has_key?
		end
		
		def create_project
			create.click
			ProjectsPage::new
		end
		
		def create_project_with_errors
			create.click
		end
	end

end
