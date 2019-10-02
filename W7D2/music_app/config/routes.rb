Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  #only need these for session...and uses RESOURCE not RESOURCES
  resource :sessions, only: [:create, :new, :destroy] 
  
  
  #only need these for users
  resources :users, only: [:create, :new, :show] 
end
