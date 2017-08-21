class OrganizationsController < ApplicationController
  def index
    @organization = Organization.all.order(:name)
  end
  
  def new
    render layout: 'client', template: 'spa/index'
  end
end
