# if Rails.env.development?
#   GraphiQL::Rails.config.headers['Authorization'] = -> (context) {
#     ActionController::HttpAuthentication::Basic.encode_credentials(
#       Rails.application.secrets.aircom_api_username,
#       Rails.application.secrets.aircom_api_password)
#   }
# end
