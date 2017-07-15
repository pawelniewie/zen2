module Pages
	
	class CreateOrganization < SitePrism::Page
		set_url '/organizations/new'
		
		element :organization_name, '[name="organization.name"]'
		element :organization_slug, '[name="organization.slug"]'
		element :email, '[name="email"]'
		element :password, '[name="password"]'
		element :first_name, '[name="first_name"]'
		element :last_name, '[name="last_name"]'
		element :create, '.ui.primary.button'
		
		load_validation do
			has_email? && has_password?
		end
		
		def create_organization
			create.click
			ProjectsPage::new
		end
	end
	
end
