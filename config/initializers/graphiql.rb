if Rails.env.development?
  GraphiQL::Rails.config.headers['Authorization'] = -> (context) {
    "Bearer #{ JWTWrapper.encode({ user_id: User.first.id }) }" if User.first.present?
  }
end
