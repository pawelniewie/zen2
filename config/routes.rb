# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # match urls where the host starts with 'www.'
  constraints(subdomain: 'www') do
    redirect_to_base_url = redirect { |_, request|
      # parse the current request url
      # tap in and remove www.
      URI.parse(request.url).tap { |uri| uri.host.sub!(/^www\./i, '') }.to_s
    }
    match '*path', via: :all, to: redirect_to_base_url
    root to: redirect_to_base_url
  end

  root 'root#index'

  post '/gql', to: 'graphql#execute'

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/gql"
  end

  # Must be last route
  get '*path', to: 'root#index'
end
