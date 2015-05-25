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

after do
  ActiveRecord::Base.connection.close
end

def update_db data
  imdb_id = data["imdbID"]
  movie = Movie.where(:imdb_id => imdb_id)

  if movie.empty?
    movie = Movie.new
    movie.imdb_id = imdb_id
    movie.data = data.to_yaml
    movie.save
  end
end

get '/' do
  erb :home
end

# New movie search - store results in db
get '/movies' do
  @search_str = params[:search_str]
  url = "http://omdbapi.com/?s=#{@search_str}"

  @movies = HTTParty.get(url)["Search"] unless !@search_str

  # 's' option giving a compact result for each movie.  We want the full thing...
  if @movies
    @movies.map! do |movie|
      id = movie["imdbID"]
      url = "http://omdbapi.com/?i=#{id}"

      complete_data = HTTParty.get(url)
      update_db complete_data

      complete_data
    end
  end

  erb :movies_index
end








