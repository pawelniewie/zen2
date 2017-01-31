class IssueResolver < GraphQL::Rails::Resolver
  resolve :project, :resolve_project
  resolve :order_by, :resolve_order

  resolve :key
  resolve :id

  def resolve_project(args)
    @result = @result.joins(:project).where(projects: { id: args[:id] }) if args[:id]
    @result = @result.joins(:project).where(projects: { key: args[:key] }) if args[:key]
    @result
  end

  def resolve_order(args)
    @result = args.reduce(@result) { |result, os| result.order(os[:key] => (os[:direction].presence || :asc)) }
  end

  def model
    Issue
  end

  def column_names(names)
    names.select { |name| model.column_names.include? name }
  end
end
