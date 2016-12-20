class CreateProjectService < ApplicationService

  att :project, Hash
  att :organization, Organization

  def call
    result = try! do
      project = Project.new(@project.slice('name', 'key').merge(organization_id: @organization.id))

      authorize project, :create?

      project.save!

      OpenStruct.new(project: project)
    end

    if block_given?
      yield(result)
    else
      result
    end
  end
end
