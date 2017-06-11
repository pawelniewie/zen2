module LoginHelpers

	def login(user)
		Pages::LoginPage.new.load do |login_page|
			login_page.login.set(user.email)
			login_page.password.set('password')
			expect(login_page.login_to_default_page).to be_loaded
		end
	end
	
	def logout
	
	end
	
end
