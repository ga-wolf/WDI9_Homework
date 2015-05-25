require 'sinatra'
require 'sinatra/reloader'

get '/' do
  "Welcome to the home page!"
end

get '/hello' do
  "Hello world"  
end

get '/mother' do
  "Look ma, I am the internet"
end

get '/name/:first' do #:makes things dynamic
  "Hello #{ params[:first].capitalize }"
end

get '/name/:first/:surname' do
  "Hello #{ param[:first].capitalize } #{ params[:surname].upcase }"
end


get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end