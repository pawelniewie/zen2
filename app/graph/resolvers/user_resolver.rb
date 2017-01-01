class UserResolver < GraphQL::Rails::Resolver
  resolve :username, :username_resolver

  def username_resolver(args)
    @result = @result.where("username ILIKE ?", "%#{args[:contains]}%") if args[:contains]
    @result = @result.where("username ILIKE ?", "#{args[:starts_with]}%") if args[:starts_with]
    @result
  end

  def model
    User
  end
end