require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/movies' do
  @movie = params[:movietitle] 
  movie = @movie
  
  url_specific = "http://omdbapi.com/?t=#{@movie}"

  if movie
    url = "http://omdbapi.com/?s=#{movie}"
    movie_data = HTTParty.get url
    @movie_data = movie_data['Search']
    @search_results = @movie_data.length
  end




  erb :movies
end

get '/movies/:filmtitle' do

  @movie_title = params[:filmtitle]
  movie = @movie_title

  if movie 
    url = "http://omdbapi.com/?t=#{movie}"
    @movie_data = HTTParty.get url
  end


  erb :title
end

# #  <li>Year: <%= m['Year'] %></li>
#   <li>Director: <%= m['Director'] %></li>
#   <li>Plot: <%= m['Plot'] %></li>
#   <li>Poster:</li>
#   <img src="<%= m['Poster']%>">

# <% if @movie_data %>
#   <% @movie_data.each do |m| %>
#   <li><a href="/movies/<%= m['Title']%>"> <%= m['Title'] %> (<%= m['Year'] %>) </a></li>
#   <% end %>
# <% end %>
