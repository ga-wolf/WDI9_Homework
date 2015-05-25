require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :movies
end


get '/movies' do
  @title = request.query_string.split("=")[1]
  @url = "http://omdbapi.com/?t=#{ @title }"
  @movie_data = HTTParty.get @url
  erb :movies # References movies.erb file.
end


get '/movies/:title?' do
  @title = params[:title]
  @url = "http://omdbapi.com/?t=#{ @title }"
  @movie_data = HTTParty.get @url
  erb :movies # References movies.erb file.
end

# test
# get '/home/' do 
#  "This is the home page"
# end