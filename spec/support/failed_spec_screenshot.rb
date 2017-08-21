# frozen_string_literal: true
RSpec.configure do |config|
	
	config.after(:example, type: :feature) do |example|
		if example.exception
			description = example.description.tr(' ', '_').tr('(),"[]=\'', '.')
			timestamp = Time.now.strftime('%Y%m%d-%H%M%S')
			filename = "js_fail_#{timestamp}-#{description}"
			
			puts 'JS test failed.'
			
			save_to filename, '.png' do |path|
				puts "Saving screenshot: #{path}"
				page.save_screenshot path, full: true
			end
			
			save_to filename, '.html' do |path|
				puts "Saving webpage: #{path}"
				File.open(path, 'w') { |file| file.write(page.body) }
			end
			
			driver = Capybara.current_session.driver
			case Capybara.current_driver
				when :selenium
					save_to filename, '-errors.txt' do |path|
						puts "Saving errors: #{path}"
						File.open(path, 'w') { |file| file.write(driver.browser.manage.logs.get('browser')) }
					end
				when :webkit
					unless driver.error_messages.empty?
						save_to filename, '-errors.txt' do |path|
							puts "Saving errors: #{path}"
							File.open(path, 'w') { |file| file.write(driver.error_messages) }
						end
					end
					
					unless driver.console_messages.empty?
						save_to filename, '-console.txt' do |path|
							puts "Saving console output: #{path}"
							File.open(path, 'w') { |file| file.write(driver.console_messages) }
						end
					end
			end
		end
	end
	
	private
	
	def save_to(filename, extension)
		reports_dir = ENV['CIRCLE_ARTIFACTS'] || File.join(Rails.root, 'tmp', 'reports')
		
		yield(File.join(reports_dir, filename) + extension)
	end
	
end
