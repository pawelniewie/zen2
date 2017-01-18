class IssueResolver < GraphQL::Rails::Resolver
  resolve :project, :resolve_project
  resolve :order_by, :resolve_order

  def resolve_project(args)
    @result = @result.joins(:project).where(projects: { id: args[:id] }) if args[:id]
    @result = @result.joins(:project).where(projects: { key: args[:key] }) if args[:key]
    @result
  end

  def resolve_order(args)
    @result = column_names(args[:asc]).reduce(@result) { |result, key| result.order(key.to_sym) } if args[:asc]
    @result = column_names(args[:desc]).reduce(@result) { |result, key| result.order({ key.to_sym => :desc }) } if args[:desc]
    @result
  end

  def model
    Issue
  end

  def column_names(names)
    names.select { |name| model.column_names.include? name }
  end
end
