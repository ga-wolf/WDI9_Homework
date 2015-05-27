require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
  )

ActiveRecord::Base.logger = Logger.new(STDERR) # Logs out the AR generated SQL in the terminal.

# These relatives have to be referenced AFTER the active record setup or they won't know what to do.
require_relative 'movie'

after do
  ActiveRecord::Base.connection.close
end

get '/movies' do
  @input = params[:movieinput].to_s.strip.capitalize
  initial_search = HTTParty.get "http://omdbapi.com/?s=#{@input}&type=movie"
  @search_results = initial_search.values_at("Search")[0] || [];

  erb :movies
end

get '/movies/:id' do
  @id = params[:id] 

  @movie = Movie.where(:imdbID => params[:id]).first

  if @movie.empty?
    url = "http://omdbapi.com/?i=#{ @id }"
    movie_data = HTTParty.get url
    @movie = Movie.new
    @movie.title =  movie_data['Title']
    @movie.plot = movie_data['Plot']
    @movie.year = movie_data['Year']
    @movie.poster = movie_data['Poster']
    @movie.imdbID = movie_data['imdbID']
    @movie.save
  end

  erb :movies_show # Finally, update this view to use @movie.title, @movie.plot etc.
 end
