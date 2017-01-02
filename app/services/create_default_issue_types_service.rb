class CreateDefaultIssueTypesService
  def project_created(project)
    project.issue_types.create!(name: 'Bug', color: 'bug')
    project.issue_types.create!(name: 'Story', color: 'story')
    project.issue_types.create!(name: 'Task', color: 'task')
  end
end