class UserResolver < GraphQL::Rails::Resolver
  def model
    User
  end
end