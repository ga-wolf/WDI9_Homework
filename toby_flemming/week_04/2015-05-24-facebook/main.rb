require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :home
end

get '/friends' do 
  token = params["token"]

  @result = HTTParty.get("https://graph.facebook.com/me?access_token=#{token}")
  erb :friends_index
end


