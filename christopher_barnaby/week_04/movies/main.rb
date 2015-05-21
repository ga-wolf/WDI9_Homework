require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/movies' do 

  @title = params[:title]

  if @title 
    
    
    @url = "http://omdbapi.com/?t=#{@title}"
    @movie_data = HTTParty.get @url

    @pretty_title = @movie_data["Title"]
    @year = @movie_data["Year"]
    @poster = @movie_data["Poster"]
    @type = @movie_data["Type"]
    @genre = @movie_data["Genre"]
    @director = @movie_data["Director"]
    @plot = @movie_data["Plot"]
    @cast = @movie_data["Actors"]
    @awards = @movie_data["Awards"]
    @metascore = @movie_data["Metascore"]
  end

  erb :movies

end
