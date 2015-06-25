Rails.application.routes.draw do
  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
end
