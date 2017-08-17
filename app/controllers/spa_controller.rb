class SpaController < ApplicationController

  layout 'client'

  def index
    if current_tenant.blank?
      redirect_to root_url(host: request.domain, subdomain: false)
    end
  end

end
