# Be sure to restart your server when you modify this file.

ApplicationController.renderer.defaults.merge!(
  http_host: Rails.application.secrets.root_domain,
  https: true
)
