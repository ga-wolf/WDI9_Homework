require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

# after do
#   ActiveRecord::Base.connection.close
# end

get '/movies' do 

  @title = params[:title]

# Determine whether the movie is in the local database
 # ##########


  url = "http://omdbapi.com/?s=#{ params["title"] }" if params[:title]
  url = "http://www.omdbapi.com/?i=#{ params["i"] }" if params[:i]
  @movie_data = HTTParty.get url if url

  @movie_data = @movie_data["Search"] if params[:title]
  @movie_data = [@movie_data] if params[:i]

  @movie_data = @movie_data || []
  
  erb :movies
end
