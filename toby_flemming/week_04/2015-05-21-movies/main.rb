require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

require_relative 'movie'
require_relative 'search'

after do
  ActiveRecord::Base.connection.close
end

def db_add_movie data
  imdb_id = data["imdbID"]
  movie = Movie.where(:imdb_id => imdb_id)

  if movie.empty?
    movie = Movie.new
    movie.imdb_id = imdb_id
    movie.data = data.to_json
    movie.save
  end
end

def db_add_search search_str, data
  prev_searches = Search.where(:search_str => search_str)

  if prev_searches.empty?
    search = Search.new
    search.search_str = search_str
    search.data = data.to_json
    search.save
  end
end

get '/' do
  erb :home
end

# New movie search - store results in db
get '/movies' do
  search_str = params[:search_str].strip.downcase
  url = "http://omdbapi.com/?s=#{search_str}"

  # Have we previously searched for this?
  prev_search = Search.where(:search_str => search_str).first[:data]
  @movies = JSON.parse prev_search

  @movies = HTTParty.get(url)["Search"]
  redirect to '/' if search_str.empty? || !@movies

  # 's' option giving a compact result for each movie.  We want the full thing...
  @movies.map! do |movie|
    id = movie["imdbID"]
    url = "http://omdbapi.com/?i=#{id}"

    complete_data = HTTParty.get(url)
    db_add_movie complete_data

    complete_data
  end

  db_add_search search_str, @movies

  if @movies.length == 1
    movie = @movies.first
    redirect to "/movies/#{movie["imdbID"]}"
  end

  erb :movies_index
end


get '/movies/:id' do
  movie_record = Movie.where(:imdb_id => params[:id]).first
  @movie = JSON.parse movie_record[:data]

  erb :movies_show
end








