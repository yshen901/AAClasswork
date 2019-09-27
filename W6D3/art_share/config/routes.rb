Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #---------- users ------------
  resources :users, only: [:create, :destroy, :index, :show, :update]

  resources :users do
    resources :artworks, only: :index
    resources :comments, only: :index
    resources :likes, only: :index
  end
  
  #---------- artworks ------------
  resources :artworks, except: [:new, :edit]

  resources :artworks do
    resources :comments, only: :index
    resources :likes, only: :index
  end

  #---------- comments ------------
  resources :comments, only: [:create, :destroy, :index]

  resources :comments do
    resources :likes, only: :index
  end


  #---------- shares ------------
  resources :artwork_shares, only: [:create, :destroy]


end
