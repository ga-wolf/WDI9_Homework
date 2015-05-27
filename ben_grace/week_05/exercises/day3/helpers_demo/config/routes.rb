Rails.application.routes.draw do
  
  get '/numb3rs' => 'pages#numbers', :as => 'numbers'
  get '/text' => 'pages#text'
  get '/assets' => 'pages#assets'
  get '/url' => 'pages#url'

  root :to => 'pages#home'
end
