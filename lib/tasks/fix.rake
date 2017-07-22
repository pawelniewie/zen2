namespace :fix do
	
	task defaults_for_projects: :environment do
		Project.includes(:statuses, :issue_types)
			.where(statuses: { project_id: nil }, issue_types: { project_id: nil })
			.find_in_batches do |projects|
			
			projects.each do |project|
				CreateDefaultIssueTypesService.new.project_created(project)
				CreateDefaultStatusesService.new.project_created(project)
			end
		end
	end

end
