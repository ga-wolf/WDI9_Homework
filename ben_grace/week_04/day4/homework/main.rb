# [9] pry(main)> @title = 'Jaws' # @title = params[:title]
# => "Jaws"
# [10] pry(main)> url = "http://omdbapi.com/?t=#{@title}"
# => "http://omdbapi.com/?t=Jaws"
# [11] pry(main)> movie_data = url
# => "http://omdbapi.com/?t=Jaws"
# [12] pry(main)> movie_data['plot']
# => nil
# [13] pry(main)> url
# => "http://omdbapi.com/?t=Jaws"
# [14] pry(main)> movie_data = HTTParty.get url

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/movies' do
  @title = params[:title]
  @url = "http://omdbapi.com/?t=#{ @title }"
  @movie_data = HTTParty.get @url

  @plot = @movie_data['Plot']
  @director = @movie_data['Director']
  @poster = @movie_data['Poster']
  @title = @movie_data['Title']
erb :movies
end

get '/movies/search' do
  @title = params[:title]
    @url = "http://omdbapi.com/?s=#{ @title }"
    @movie_data = HTTParty.get @url
    @search_array = []

    @movie_data
      @movie_data['Search'].each do |movie|
        @search_array << movie
      end

  # binding.pry
erb :search
end