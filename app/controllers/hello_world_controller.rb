class HelloWorldController < ApplicationController

  skip_before_action :authenticate_user!

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
