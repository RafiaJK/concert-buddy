Rails.application.routes.draw do
  resources :shows
  resources :contacts, only: [:index, :show, :create, :edit, :destroy]
  resources :artists
  resources :users

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  #route to test config
  get '/hello', to: 'application#hello_world'
  post "/signup", to: "users#create"
  post "/welcome", to: "contacts#create" 

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  get "/profile", to: "users#show"
  get "/auth", to: "users#show"
  patch "/contacts/:id", to: "contacts#edit"

  delete "/users/:id", to: "users#destroy"

  #get "/shows", to: " "

  get "/shows", to: "showlists#create"
  get "/showlists", to: "showlists#show"

  get "/artists", to: "artists#show"

  get "/shows", to: "shows#show"

end
