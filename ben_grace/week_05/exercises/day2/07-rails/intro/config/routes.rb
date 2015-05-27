Rails.application.routes.draw do
  root :to => 'pages#home'

  #Static pages Not using database in anyway
  get '/home' => 'pages#home'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'

  #dynamic routes with variable bits in params, just like sinatra. (they use the database..)
  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  get '/calc/:x/:y/:operator' => 'calc#calculate'

  get '/funny' => 'pages#lol'

end
