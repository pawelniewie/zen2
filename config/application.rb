require_relative 'boot'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
# require "action_cable/engine"
require "sprockets/railtie"
require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Backend
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.active_job.queue_adapter = :delayed_job

    config.action_mailer.default_url_options = { host: Rails.application.secrets.base_url }
    config.action_mailer.delivery_method = :mailgun
    config.action_mailer.deliver_later_queue_name = 'zen-mailer'
    config.action_mailer.mailgun_settings = {
      api_key: Rails.application.secrets.mailgun_key,
      domain: Rails.application.secrets.mailgun_domain,
    }

    config.action_dispatch.tld_length = Rails.application.secrets.base_url.count '.'

    config.active_record.primary_key = :uuid

    config.autoload_paths += %w(app/graph/types app/graph/resolvers app/graph/mutations)
  end
end
