class IssueResolver < GraphQL::Rails::Resolver
  resolve :organization_id

  resolve :project, :resolve_project

  def resolve_project(arg)
    @result = @result.joins(:project).where(projects: {id: arg[:id]}) if arg[:id]
    @result = @result.joins(:project).where(projects: {key: arg[:key]}) if arg[:key]
  end

  def model
    Issue
  end
end