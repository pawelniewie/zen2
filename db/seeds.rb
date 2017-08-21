zen = Organization.find_by_name('Zen')
if zen.blank?
	zen = Organization.create!(name: 'Zen', slug: 'zentest')
	zen.update!(slug: 'zen')
	
	zen.users.create!(first_name: "Pawel", last_name: "Niewiadomski", username: "pin", password: "password", confirmed_at: Time.now, email: "11110000b@gmail.com")
end

test_project = zen.projects.find_by_key('TEST')
if test_project.blank?
	test_project = zen.projects.create!(name: "Test", key: "TEST", visibility: :private)
	test_project.issues.create!(summary: "This is a test issue")
	test_project.issues.create!(summary: "Please fix this before releasing")
end

zen_project = zen.projects.find_by_key("ZEN")
if zen_project.blank?
	zen_project = zen.projects.create!(name: "Zen", key: "ZEN", visibility: :private)
	zen_project.issues.create!(summary: "Issue from another project")
end

if God.find_by_email('11110000b@gmail.com').blank?
	God.create!(first_name: "Pawel", last_name: "Niewiadomski", password: "password", email: "11110000b@gmail.com")
end

zen_team = Team.find_by_name('Zen Team')
if zen_team.blank?
	zen_team = zen.teams.create!(name: 'Zen Team')
end

unless test_project.issue_custom_fields.find_by_name('Tester')
	test_project.issue_custom_fields.create!(name: 'Tester', field_type: CustomFieldType::USER_CUSTOM_FIELD_TYPE)
end
