Capybara.register_driver :selenium do |app|
	chrome_args = ['--window-size=1920,1080']
	chrome_args << '--headless' if ENV['CIRCLECI'].present?
	
	Capybara::Selenium::Driver.new(app,
		browser: :chrome, args: chrome_args)
end

Capybara.configure do |config|
	config.always_include_port = true
	config.default_driver = :selenium
	# config.block_unknown_urls
	config.default_host = "http://127.0.0.1.xip.io"
end
