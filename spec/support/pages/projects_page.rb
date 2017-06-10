module Pages
	
	class ProjectsPage < SitePrism::Page
		set_url '/'
		
		element :main_title, '.listing-layout--title'
		
		load_validation do
			has_main_title?
		end
	end
	
end
