Rails.application.routes.draw do
  root :to => 'rivers#index'

  get '/rivers' => 'rivers#index'
  get '/rivers/new' => 'rivers#new'

  post '/rivers' => 'rivers#create'

  get '/rivers/:id' => 'rivers#show', :as => 'river'


  post '/rivers/:id/delete' => 'rivers#destroy', :as => 'river_destroy'

  get '/rivers/:id/edit' => 'rivers#edit', :as => 'river_edit'

  post '/rivers/:id' => 'rivers#update'


end
