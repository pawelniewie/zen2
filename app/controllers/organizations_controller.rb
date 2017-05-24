class OrganizationsController < ApplicationController
  def index
    @organization = Organization.all.order(:name)
  end
end
