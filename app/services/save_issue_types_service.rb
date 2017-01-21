class SaveIssueTypesService < VirtusService

  attribute :issue, Hash
  attribute :project, Project

  def call
    result = try! do
      issue = Issue.new(@issue.slice('summary', 'description').merge(project_id: @project.id))

      authorize issue, :create?

      issue.save!

      broadcast(:issue_created, issue)

      OpenStruct.new(issue: issue)
    end

    if block_given?
      yield(result)
    else
      result
    end
  end
end
