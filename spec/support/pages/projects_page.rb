module Pages
	
	class ProjectsPage < SitePrism::Page
		set_url '/'
		
		element :projects_list, '.projects-list'
		
		load_validation do
			has_projects_list?
		end
	end
	
end
