HealthCheck.setup do |config|
	
	# uri prefix (no leading slash)
	config.uri = 'alive'
	
	# Text output upon success
	config.success = 'still kicking'
	
	# Timeout in seconds used when checking smtp server
	config.smtp_timeout = 30.0
	
	# http status code used when plain text error message is output
	# Set to 200 if you want your want to distinguish between partial (text does not include success) and
	# total failure of rails application (http status of 500 etc)
	
	config.http_status_for_error_text = 500
	
	# http status code used when an error object is output (json or xml)
	# Set to 200 if you want your want to distinguish between partial (healthy property == false) and
	# total failure of rails application (http status of 500 etc)
	
	config.http_status_for_error_object = 500
	
	# You can customize which checks happen on a standard health check, eg to set an explicit list use:
	config.standard_checks = %w(database migrations custom)
	
	# You can set what tests are run with the 'full' or 'all' parameter
	config.full_checks = %w(database migrations email)
	
	# max-age of response in seconds
	# cache-control is public when max_age > 1 and basic_auth_username is not set
	# You can force private without authentication for longer max_age by
	# setting basic_auth_username but not basic_auth_password
	config.max_age = 1
	
	# Protect health endpoints with basic auth
	# These default to nil and the endpoint is not protected
	config.basic_auth_username = ENV['HEALTH_CHECK_USER']
	config.basic_auth_password = ENV['HEALTH_CHECK_PASSWORD']
	
	# http status code used when the ip is not allowed for the request
	config.http_status_for_ip_whitelist_error = 403
end
