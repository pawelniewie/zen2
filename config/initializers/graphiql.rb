if Rails.env.development? && ENV['GRAPHIQL_USER'] && ENV['GRAPHIQL_PASSWORD']
  GraphiQL::Rails.config.headers['Authorization'] = -> (context) {
    ActionController::HttpAuthentication::Basic.encode_credentials(
      ENV['GRAPHIQL_USER'],
      ENV['GRAPHIQL_PASSWORD'])
  }
end
