Capybara.register_driver :selenium do |app|
	Capybara::Selenium::Driver.new(app, browser: :chrome)
end

Capybara.configure do |config|
	config.always_include_port = true
	config.default_driver = :selenium
	# config.block_unknown_urls
	config.default_host = "http://127.0.0.1.xip.io"
end
