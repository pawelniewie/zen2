# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  root 'root#index'

  mount GraphQL::Rails::Engine => "/gql"

  # Must be last route
  get '*path', to: 'root#index'
end
