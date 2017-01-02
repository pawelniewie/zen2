class CreateDefaultStatusesService
  def project_created(project)
    project.statuses.create!(name: 'Open', category: StatusCategory::NEW)
    project.statuses.create!(name: 'In Progress', category: StatusCategory::IN_PROGRESS)
    project.statuses.create!(name: 'Done', category: StatusCategory::DONE)
  end
end