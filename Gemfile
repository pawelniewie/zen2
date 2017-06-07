ruby '2.4.1'
source 'https://rubygems.org' do
  # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
  gem 'rails', '>= 5.0.0'
  gem 'responders'
  # Use postgresql as the database for Active Record
  gem 'pg'
  # Use Puma as the app server
  gem 'puma', '~> 3.0'
  # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
  gem 'jbuilder', '~> 2.0'
  # Use Redis adapter to run Action Cable in production
  # gem 'redis', '~> 3.0'
  # Use ActiveModel has_secure_password
  # gem 'bcrypt', '~> 3.1.7'

  # Use Capistrano for deployment
  # gem 'capistrano-rails', group: :development

  # Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
  gem 'rack-cors'

  # Windows does not include zoneinfo files, so bundle the tzinfo-data gem
  gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

  # Mail handling
  gem 'mailgun_rails'
  gem 'roadie-rails'
  gem 'nokogiri'

  gem 'recursive-open-struct'

  gem 'attr_encrypted'

  gem 'addressable'

  gem 'bottled_services', git: 'https://github.com/pawelniewie/bottled_services.git', branch: 'master'

  gem 'newrelic_rpm'

  gem 'draper', '~> 3.0.0.pre1'

  gem 'gibbon'

  gem 'rails-commons', git: 'https://github.com/pawelniewie/rails-commons.git', branch: 'master'

  gem 'solid_assert'

  gem "bugsnag"

  gem 'delayed_job_active_record'

  gem "react_on_rails", "~> 6"

  gem 'mini_racer', platforms: :ruby

  gem 'devise'
  gem 'devise_invitable'

  gem 'uglifier'

  gem 'slim'

  gem "zero_downtime_migrations"

  gem 'jwt'

  gem 'pundit'

  gem "active_record-updated_at"

  gem 'graphql'
  gem 'graphiql-rails'
  gem 'graphql-rails-resolver', git: 'https://github.com/colepatrickturner/graphql-rails-resolver.git', branch: 'master'

  gem 'deterministic'

  gem 'activerecord-session_store'

  gem 'sequenced'

  gem 'virtus'

  gem 'activeadmin', git: 'https://github.com/activeadmin/activeadmin.git'

  # Workflow
  gem 'aasm'

  gem 'wisper', '2.0.0.rc1'
  gem "trailblazer-rails"
  gem "cells-rails"

  # Auditing
  gem "rails-observers", git: 'https://github.com/rails/rails-observers.git'
  gem "audited", "~> 4.3"

  gem 'activerecord-clean-db-structure'

  gem 'acts_as_tenant', git: 'https://github.com/a3ammar/acts_as_tenant.git'

  gem "paperclip"

  group :development, :test do
    # Call 'byebug' anywhere in the code to stop execution and get a debugger console
    gem 'pry-byebug', platform: :mri
    gem 'rspec-rails'
    gem 'annotate'
	  gem 'rspec_junit_formatter'
  end

  group :development do
    gem 'listen', '~> 3.0.5'
    # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
    gem 'spring'
    gem 'spring-watcher-listen', '~> 2.0.0'
    gem 'dotenv-rails'
    gem 'dotenv-heroku'
    gem "better_errors"
    gem "binding_of_caller"
  end

  gem 'lograge', group: :production
end
