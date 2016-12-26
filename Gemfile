ruby '2.3.3'
source 'https://rubygems.org' do
  # Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
  gem 'rails', '>= 5.0.0'
  gem 'responders'
  # Use postgresql as the database for Active Record
  gem 'pg', '~> 0.18'
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

  gem 'uglifier'

  gem 'slim'

  gem "zero_downtime_migrations"

  gem 'jwt'

  gem 'pundit'

  gem "active_record-updated_at"

  gem 'graphql'
  gem 'graphiql-rails'
  gem 'graphql-rails-resolver', git: 'https://github.com/pawelniewie/graphql-rails-resolver.git', branch: 'master'

  gem 'deterministic'

  gem 'activerecord-session_store'

  gem 'sequenced'

  # Workflow
  gem 'aasm'

  group :production do
    gem 'rails_12factor'
    gem 'remote_syslog_logger'
    gem 'multilogger', git: 'https://github.com/ffmike/multilogger.git', branch: 'master'
    gem 'platform-api', git: 'https://github.com/jalada/platform-api.git', branch: 'master'
  end

  group :development, :test do
    # Call 'byebug' anywhere in the code to stop execution and get a debugger console
    gem 'pry-byebug', platform: :mri
  end

  group :development do
    gem 'listen', '~> 3.0.5'
    # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
    gem 'spring'
    gem 'spring-watcher-listen', '~> 2.0.0'
    gem 'dotenv-rails'
    gem 'dotenv-heroku'
  end
end
