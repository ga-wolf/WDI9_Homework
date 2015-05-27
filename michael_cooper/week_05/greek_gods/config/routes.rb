Rails.application.routes.draw do

  root :to => "gods#index"

  get '/gods' => "gods#index"
  post '/gods' => "gods#new"

  get '/gods/new' => "gods#create"

  get '/gods/:id' => "gods#show", as: "god"
  post '/gods/:id' => 'gods#update'

  get '/gods/:id/edit' => "gods#edit", as: "god_edit"
  post '/gods/:id/delete' => "gods#delete", as: "god_delete"
  
end
