require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/movies' do
  @input = params[:movieinput].to_s.strip.capitalize
  initial_search = HTTParty.get "http://omdbapi.com/?s=#{@input}&type=movie"
  search_results = initial_search.values_at("Search")[0] || [];

  @results_length = 0
  @list_of_names = []
  @list_of_links = []
  
  if search_results.length > 1
    search_results.each {|title| @list_of_names.push(title['Title'])}
    search_results.each {|link| @list_of_links.push(link['imdbID'])}
    @results_length = @list_of_names.length
  end

  if @input.include? " "
    @input = @input.split.map(&:capitalize).join(' ')
  end

  if !@input.empty?
    movie_data = HTTParty.get "http://omdbapi.com/?t=#{@input}"
    @title = movie_data['Title']
    @year = movie_data['Year']
    @poster = movie_data['Poster']
  end

  erb :movies
end