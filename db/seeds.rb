if Organization.find_by_name('Zen').blank?
  zen = Organization.create!(name: 'Zen', slug: 'zentest')
  zen.update!(slug: 'zen')

  zen.users.create!(first_name: "Pawel", last_name: "Niewiadomski", username: "pin", password: "password", confirmed_at: Time.now, email: "11110000b@gmail.com")

  project_a = zen.projects.create!(name: "Project A", key: "PA")
  project_b = zen.projects.create!(name: "Project B", key: "PB")

  project_a.issues.create!(summary: "This is a test issue")
  project_a.issues.create!(summary: "Please fix this before releasing")

  project_b.issues.create!(summary: "Issue from another project")
end

if God.find_by_email('11110000b@gmail.com').blank?
  God.create!(first_name: "Pawel", last_name: "Niewiadomski", password: "password", email: "11110000b@gmail.com")
end

zen = Organization.find_by_name('Zen')
if zen.projects.find_by_name('Zen').blank?
	zen.projects.create!(name: 'Zen', visibility: :public, key: 'ZEN')
end
