class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  after_action :add_user_headers

  before_bugsnag_notify :add_user_info_to_bugsnag

  protected

  def add_user_info_to_bugsnag(notification)
    notification.user = {
      email: current_user.email,
      id: current_user.id,
    }
  end

  def add_user_headers
    return unless current_user

    response.headers['X-User-ID'] = current_user.id
  end
end
