module OrganizationSwitcher
	def visit_organization(organization_or_slug, path = nil)
		app_host = URI.join("http://#{organization_or_slug.is_a?(Organization) ? organization_or_slug.slug : organization_or_slug}.127.0.0.1.xip.io").to_s
		using_app_host(app_host) do
			visit path if path.present?
			yield
		end
	end
	
	def using_app_host(host)
		original_host = Capybara.app_host
		Capybara.app_host = host
		yield
	ensure
		Capybara.app_host = original_host
	end
end


RSpec.configure do |config|
	config.include OrganizationSwitcher
	
	config.around(:each, type: :feature) do |example|
		if example.metadata.has_key?(:organization)
			visit_organization(example.metadata[:organization]) do
				example.run
			end
		else
			example.run
		end
	end
end
