Rails.application.routes.draw do
  resources :shows
  resources :contacts
  resources :artists
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #route to test config
  get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  get "/profile", to: "contacts#update"


  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
