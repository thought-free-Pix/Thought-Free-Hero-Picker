Rails.application.routes.draw do
  root 'backbone#index'
  namespace :api do
    resources :heros

    resources :roles
  end
end
