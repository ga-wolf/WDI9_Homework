Rails.application.routes.draw do

  delete 'players/:id' => 'players#destroy', :as => 'delete_player'
  resources :players

end
