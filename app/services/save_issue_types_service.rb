class SaveIssueTypesService < VirtusService

  attribute :issue_types, Array
  attribute :project, Project

  def call
    try! do
      authorize issue, :create?

      Project.transaction do
        stored = issue_types
          .each_with_index
          .map { |it, idx| project.issue_types.find_or_initialize_by(id: it.id).update(it.slice(:name, :color).merge(position: idx)) }

        project.issue_types.where.not(id: stored.map(&:id)).destroy_all

        broadcast(:issue_types_updated, project)

        OpenStruct.new(issue_types: stored)
      end
    end
  end
end
