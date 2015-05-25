require "sinatra"
require "sinatra/reloader"
require "httparty"
require "active_record"


# Sets up our connection to the movies.db
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'movies.db'
)
# Logs out the AR generated SQL in the terminal
ActiveRecord::Base.logger = Logger.new(STDERR) 

class Movie < ActiveRecord::Base
end



get "/" do
  erb :home
end



post "/search" do
  @film = params[:title]

  # Search for films
  url = "http://www.omdbapi.com/?s=#{ @film }"
  @search_data = HTTParty.get(url)

  # if empty string     ["Response"] = false
  # if movie not found  ["Response"] = false
  # if one result       ["Response"] doesn't exist but ["Search"] exists
  # if many results     ["Response"] doesn't exist but ["Search"] exists

  if @search_data.has_key?("Search")
    if @search_data["Search"].length == 1
      # Send to the film page with the imbdID
      redirect to("/film/#{ @search_data["Search"][0]["imdbID"] }")
    else
      # Display the search results
      erb :search
    end
  else
    # Display an error page
    erb :error
  end
end



get "/film/:id" do

  # Check the local database
  @movie = Movie.find_by_id(params[:id])
  if !@movie
  
    # Get the film information from OMDB
    url = "http://www.omdbapi.com/?i=#{ params[:id] }"
    film_data = HTTParty.get(url)

    # Test that a film was found
    if film_data["Response"]

      # Save the movie data locally
      @movie = Movie.new
      @movie.id = film_data["imdbID"]
      @movie.title = film_data["Title"]
      @movie.year = film_data["Year"]
      @movie.rated = film_data["Rated"]
      @movie.released = film_data["Released"]
      @movie.runtime = film_data["Runtime"]
      @movie.genre = film_data["Genre"]
      @movie.director = film_data["Director"]
      @movie.actors = film_data["Actors"]
      @movie.plot = film_data["Plot"]
      @movie.poster = film_data["Poster"]
      @movie.save
    else
      # Display the error page
      erb :error
    end
  end

  erb :film

end




