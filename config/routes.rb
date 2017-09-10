# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
	health_check_routes
	
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  devise_for :gods, ActiveAdmin::Devise.config

  # match urls where the host starts with 'www.'
  constraints(subdomain: 'www') do
    redirect_to_root_domain = redirect { |_, request|
      # parse the current request url
      # tap in and remove www.
      URI.parse(request.url).tap { |uri| uri.host.sub!(/^www\./i, '') }.to_s
    }
    match '*path', via: :all, to: redirect_to_root_domain
    root to: redirect_to_root_domain
  end

  constraints(subdomain: '') do
    root 'organizations#index'
    
    ActiveAdmin.routes(self)
    
    resources :organizations
  end
  
  
  root 'spa#index', constraints: lambda { |request| request.subdomain.present? }

  post '/gql', to: 'graphql#execute'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/gql"
  end

  # Must be last route
  get '*path', to: 'spa#index'
end
