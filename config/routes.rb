Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes"

  resources :scientists, only: [:create, :index, :show]

  resources :physicians, only: [:create, :index, :show] do
    member do
      resources :patients, only: [:create, :show]
    end
  end


  resources :patients, only: [:index, :show] do
    resources :statuses, only: [:create, :show, :index]
    resources :results, only: [:index]
    member do
      post '/importresults' => 'results#import'
    end
    member do
      put '/assignscientist' => 'patients#assign_scientist'
    end
  end

  resources :users, only: [:index] do
    member do
      get '/patients' => 'users#get_patients'
    end
  end

  # Allows html5 routes
  # get "/*path/*sub" => redirect("/?goto=%{path}&sub=%{sub}")

  # You can have the root of your site routed with "root"
  root 'application#angular'
end
