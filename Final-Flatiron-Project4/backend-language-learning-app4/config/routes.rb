Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    namespace :api do 
    namespace :v1 do 

  resources :users
  resources :words
  resources :spanish_languages
  resources :user_languages
  resources :progress_forms
  post '/login', to: 'auth#create'
   

  
    end
  end
end
