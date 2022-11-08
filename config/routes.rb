Rails.application.routes.draw do
  resources :shows
  resources :contacts
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
  #post "/signup", to: "contacts#create" #figure out

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"

  get "/profile", to: "users#show"
  get "/auth", to: "users#show"
  patch "/contacts/:id", to: "contacts#update"
  #get "/shows", to: " "

  get "/artists", to: "artists#show"

  get "/shows", to: "shows#show"

end
