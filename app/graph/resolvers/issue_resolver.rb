class IssueResolver < GraphQL::Rails::Resolver
  resolve :project, :resolve_project
  resolve :order_by, :resolve_order

  resolve :key, :resolve_key
  resolve :id, :resolve_id

  def resolve_project(args)
    @result = @result.joins(:project).where(projects: { id: args[:id] }) if args[:id]
    @result = @result.joins(:project).where(projects: { key: args[:key] }) if args[:key]
    @result
  end

  def resolve_order(args)
    @result = args.reduce(@result) { |result, os| result.order(os[:key] => (os[:direction].presence || :asc)) }
  end

  def resolve_key(issue_key)
    project_key, issue_no = ParseKey.(issue_key)

    if project_key
      @result = resolve_project({key: project_key})
      @result = @result.where(no: issue_no)
    else
      @result = @result.none
    end
  end

  def resolve_id(issue_id)
    @result.where(id: issue_id)
  end

  def model
    Issue
  end

  def column_names(names)
    names.select { |name| model.column_names.include? name }
  end
end
