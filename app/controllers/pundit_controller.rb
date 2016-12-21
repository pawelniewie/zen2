class PunditController < ApplicationController
  include Pundit

  # Make sure authorization was performed
  after_action :verify_authorized
end