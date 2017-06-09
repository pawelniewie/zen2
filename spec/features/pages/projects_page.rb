class ProjectsPage < SitePrism::Page
	element :main_title, '.listing-layout--title'
	
	load_validation do
		has_main_title?
	end
end
