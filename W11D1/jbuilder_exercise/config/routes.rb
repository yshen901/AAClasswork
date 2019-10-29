Rails.application.routes.draw do
  # Your routes here!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resources :guests, only: :index
    resources :parties, only: [:show, :index]
    resources :gifts, only: :show

    # don't duplicate this above on line 7, as that would make 2 routes
    resources :guests, only: :show do 
      resources :gifts, only: :index
    end 
  end
end
