Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:create, :destroy, :index, :show, :update]

  resources :users do
    resources :artworks, only: :index
  end
  
  resources :artworks, except: [:new, :edit]
  resources :artwork_shares, only: [:create, :destroy]
end
