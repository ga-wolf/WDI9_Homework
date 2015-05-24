require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/friends' do
  erb :friends_index
end


