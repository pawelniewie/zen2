class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  include Pundit

  # Make sure authorization was performed
  after_action :verify_authorized
end
