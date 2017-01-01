class IssueResolver < GraphQL::Rails::Resolver
  resolve :project, :resolve_project

  def resolve_project(args)
    @result = @result.joins(:project).where(projects: {id: args[:id]}) if args[:id]
    @result = @result.joins(:project).where(projects: {key: args[:key]}) if args[:key]
    @result
  end

  def model
    Issue
  end
end