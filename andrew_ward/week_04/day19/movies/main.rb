require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do

  @title = params[:title]
  url = "http://omdbapi.com/?t=#{@title}"
  movie_data = HTTParty.get url
  @plot = movie_data['Plot']
  @poster = movie_data['Poster']
  @title_proper = movie_data['Title']
  @imdbRating = movie_data['imdbRating']
  @released = movie_data['Released']

erb :movie

end


##### TO GET MOVIES WITH SPACES IN IT YOU HAVE TO INSERT A PLUS WHEN THERE SHOULD BE A SPACE

##### TO GET MULTIPLE TITLES SEARCH WITH 'S' RATHER THAN 'T' IN THE URL

# <ul>
# <% @search_results.each do |results| %> 
# <li><%= result %> </li>
# <%end%>
# </ul>