require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
	:adapter => "sqlite3",
	:database => "movies.db"
)

class Movie < ActiveRecord::Base
end

## INCASE I NEED TO DO ANYTHING BEFORE
# before do 
# 	
# end

after do
	ActiveRecord::Base.connection.close
end

get '/moogle' do 
	@title = params[:title]
	if @title && @title.length > 0
		@search_url="http://omdbapi.com/?s=#{@title}"
		@movie_search= HTTParty.get(@search_url) 
		@search_result= @movie_search['Search']
		if @search_result.length == 1
			@message = "There's only one result"
			@single_result = @search_result[0]['imdbID']
			redirect to("/moogle/movie/#{@single_result}")
		# else
		# 	redirect to("/moogle/list/#{@title}")
		# end
		end
	end 
	erb :moogle
end

get '/moogle/movie/:id' do
	@id = params[:id]
	@movieQ = Movie.where(:imdb_id => params[:id])

	url = "http://omdbapi.com/?i=#{@id}"
	if @id
		if @movieQ.any?
			@statement = "this is true"
			@movie = Movie.find_by(:imdb_id => params[:id])
			# @movie_title = @movie['title']
			# @movie_plot = @movie['plot']
		else
			@statement = "this is false"
			@single_movie = HTTParty.get(url) 
			@movie_poster = @single_movie['Poster']
			@movie_title = @single_movie['Title']
			@movie = Movie.new
			@movie.imdb_id = params[:id]
			@movie.poster = @movie_poster
			@movie.title = @movie_title
			@movie.save
		end

	end
	erb :single_entry
end



# get '/moogle/list/:search' do 
# 	@search = params[:search]
# 	@search_url="http://omdbapi.com/?s=#{@search}"		
# 	@movie_search= HTTParty.get(@search_url) 
# 	@search_result= @movie_search['Search']
# 	erb :multiple_entry
# end