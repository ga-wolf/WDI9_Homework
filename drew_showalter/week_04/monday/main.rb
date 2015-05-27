require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'
require 'active_record'

# Sets up our connection to the database.db we have created.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR) # Logs out the AR generated SQL in the terminal.

# Load these after we have connected to the database or it won't work.
require_relative 'movie'

before do
  @genres = Movie.select(:genre).uniq
end

after do
  ActiveRecord::Base.connection.close
end

get '/pry' do
  require 'pry'
  binding.pry
end

get '/' do
  erb :home
end

get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

post '/movies' do
  # if Movie.all['title'].upcase.contains? params[:title].upcase
    movie = Movie.new

    url = "http://omdbapi.com/?t=#{params[:title].chomp}"
    ret = HTTParty.get url

    movie.title = ret['Title']
    movie.year = ret['Year'].to_i
    movie.runtime = ret['Runtime'][0..-4].to_i
    movie.genre = ret['Genre'][0]
    movie.director = ret['Director']
    movie.actors = ret['Actors']
    movie.plot = ret['Plot']
    movie.language = ret['Language']
    movie.poster = ret['Poster']
    movie.imdbID = ret['imdbID']
    movie.imdbRate = ret['imdbRating'].to_i
    movie.myRate = 0;
    movie.rounds = 0;

    movie.save
  # else
  # end

  redirect to("/movies/#{ movie.id }")
end

get '/movies/new' do
  erb :movies_new
end

get '/movies/:id' do
  @movie = Movie.find params[:id] # No array unwrapping needed: returns a single movie object.
  erb :movies_show
end

get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.title = params[:title]
  movie.year = params[:year]
  movie.runtime = params[:runtime]
  movie.genre = params[:genre]
  movie.director = params[:director]
  movie.actors = params[:actors]
  movie.plot = params[:plot]
  movie.language = params[:language]
  movie.poster = params[:poster]
  movie.imdbID = params[:imdbID]
  movie.imdbRate = params[:imdbRate]
  movie.myRate = params[:myRate]
  movie.rounds = params[:rounds]

  movie.save

  redirect to("/movies/#{ params[:id] }")
end

get '/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to('/movies')
end

get '/movies/genres/:genre' do
  @movies = Movie.where(:genre => params[:genre])
  erb :movies_index
end