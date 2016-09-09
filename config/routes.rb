Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes"

  resources :scientists, only: [:create, :index, :show]

  resources :physicians, only: [:create, :index, :show] do
    member do
      resources :'patients', only: [:create, :show]
    end
  end


  resources :'patients', only: [:index, :show] do
    member do
      put '/assignscientist' => 'patients#assign_scientist'
    end
  end

  resources :users, only: [:index] do
    member do
      get '/patients' => 'users#get_patients'
    end
  end

  # Allows Angular HTML5 routes
  get "/*path" => redirect("/?goto=%{path}")
  # You can have the root of your site routed with "root"
  root 'application#angular'
end
