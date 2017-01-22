class SaveIssueTypesService < VirtusService

  attribute :issue_types, Array
  attribute :project, Project

  def call
    try! do
      authorize project, :edit?

      Project.transaction do
        stored = issue_types
          .each_with_index
          .map do |it, idx|
          issue_type = project.issue_types.find_or_initialize_by(id: it[:id])
          issue_type.update(it.slice(:name, :color).merge(position: idx))
          issue_type
        end

        project.issue_types.where.not(id: stored.map(&:id)).destroy_all

        broadcast(:issue_types_updated, project)

        OpenStruct.new(issue_types: stored)
      end
    end
  end
end
