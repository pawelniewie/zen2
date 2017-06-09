class LoginPage < SitePrism::Page
	set_url '/users/login'

	element :login, '#login-id'
	element :password, '#password-id'
	element :submit, '.login-form--submit'
	
	load_validation do
		has_login_element?
		has_password_element?
		has_submit_element?
	end
	
	def login_to_default_page
		submit.click
		ProjectsPage.new
	end
end
