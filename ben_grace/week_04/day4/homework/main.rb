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
require 'active_record' #inclues the active record gem

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR) #logs out the AR generated SQL in the terminal

after do
  ActiveRecord::Base.connection.close
end

require_relative 'movie'


get '/movies' do
  @title = params[:title]
  @url = "http://omdbapi.com/?t=#{ @title }"
  @movie_data = HTTParty.get @url

  @plot = @movie_data['Plot']
  @director = @movie_data['Director']
  @poster = @movie_data['Poster']
  @title = @movie_data['Title']
  @id = @movie_data['imdbID']
erb :movies
end

get '/movies/search' do
  @title = params[:title]
    @url = "http://omdbapi.com/?s=#{ @title }"
    @movie_data = HTTParty.get @url
    @search_array = []

      @movie_data['Search'].each do |movie|
        @search_array << movie
      end

  # binding.pry
erb :search
end

#Joels reviewed version.
get '/movies/:id' do
  @id = params[:id]
  #Checking whether the movie is in the database
  @movie = Movie.where(:imdbID => params[:id]).first
  binding.pry
 
  #If not in the database it grabs it from the site
  if @movie.empty?
    url = "http://omdbapi.com/?i=#{ @id }"
    movie_data = HTTParty.get url
    # binding.pry
    @movie = Movie.new
    binding.pry
    @movie.title =  movie_data['Title']
    @movie.plot = movie_data['Plot']
    @movie.poster = movie_data['Poster']
    @movie.imdbID = movie_data['imdbID']
    @movie.save 
  end
  erb :movies_show # Finally, update this view to use @movie.title, @movie.plot etc.
end


###My version
# get '/movies/:id' do
#   @id = params[:id] 
#   #Checking whether the movie is in the database
#   @movie = Movie.where(:imdbID => params[:id])
#   binding.pry
#   #If not in the database it grabs it from the site
#   if @movie.empty?
#     url = "http://omdbapi.com/?i=#{ @id }"
#     movie = HTTParty.get @url
#   end
#   @movie = Movie.new
#   binding.pry
#   @movie.title = movie['Title']
#   @movie.plot = movie['Plot']
#   @movie.poster = movie['Poster']
#   @movie.imdbID = movie['imdbID']

#   @movie.save

#   erb :movies_show
# end

# post '/movies/:id' do

#   movie = Movie.new
#   movie.title =  @movie_data['Title']
#   movie.plot = @movie_data['Plot']
#   movie.poster = @movie_data['Poster']

#   movie.save

# end






