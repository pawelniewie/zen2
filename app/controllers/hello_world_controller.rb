class HelloWorldController < ApplicationController

  skip_before_action :authenticate_user!
  skip_after_action :verify_authorized

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
