Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #so far, all we need to know is to signup a new user, and show their info
  resources :users, only: [:new, :create, :show]     

  #new/create is to start a new session, destroy to logout/end session
  resource :session, only: [:new, :create, :destroy] 

  resources :musics, only: [:index]
end
