Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  #format json tells the system to look for a json.jbuilder first not an html.erb
  namespace :api, defaults: { format: :json } do 
    resources :pokemon, only: [:create, :index, :show]
  end
end
