require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  @search_str = params[:search_str]
  url = "http://omdbapi.com/?s=#{@search_str}"

  @movies = HTTParty.get(url)["Search"] unless !@search_str

  # 's' option giving a compact result for each movie.  We want the full thing...
  if @movies
    @movies.map! do |movie|
      id = movie["imdbID"]
      url = "http://omdbapi.com/?i=#{id}"

      complete_data = HTTParty.get(url)
      movie.merge complete_data
    end
  end

  erb :movies
end



get '/movie/:id' do

end