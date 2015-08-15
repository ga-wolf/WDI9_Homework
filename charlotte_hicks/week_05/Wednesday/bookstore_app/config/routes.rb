Rails.application.routes.draw do
  get 'authors/edit'

  get 'authors/index'

  get 'authors/new'

  get 'authors/show'

 resources :books, :authors
end
