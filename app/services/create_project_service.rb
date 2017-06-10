class CreateProjectService < ApplicationService

  att :project, Hash
  att :organization, Organization

  def call
    result = try! do
      Project.transaction do
        project = Project.new(@project.slice('name', 'key', 'visibility')
          .reverse_merge(visibility: :private)
          .merge(organization_id: @organization.id))

        authorize project, :create?

        project.save!

        broadcast(:project_created, project)

        OpenStruct.new(project: project)
      end
    end

    if block_given?
      yield(result)
    else
      result
    end
  end
end
