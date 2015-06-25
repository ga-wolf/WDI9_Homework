require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  @movie_title = params[:movie_title].capitalize
  @movie_poster = params[:movie_title]
  @url = "http://omdbapi.com/?t=#{@movie_title}&y=&plot=full&r=json"
  @movie_data = HTTParty.get @url
  @poster = @movie_data['Poster']

  erb :movies
end

