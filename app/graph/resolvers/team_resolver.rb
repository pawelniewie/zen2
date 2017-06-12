class TeamResolver < GraphQL::Rails::Resolver
  resolve :order_by, :resolve_order

  resolve :name
  resolve :id

  def resolve_order(args)
    @result = args.reduce(@result) { |result, os| result.order(os[:key] => (os[:direction].presence || :asc)) }
  end

  def model
    Team
  end
end
