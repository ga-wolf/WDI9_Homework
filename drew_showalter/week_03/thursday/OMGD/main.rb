require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# Movies I
# Specification
# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.

get '/' do
  movie = params[:movie]
  if movie
    url = "http://omdbapi.com/?s=#{movie.chomp}"
    @the_movies = HTTParty.get url
    num_movies = @the_movies['Search'].length
    @title = @the_movies['Search'][0]['Title']
    id = @the_movies['Search'][0]['imdbID']

    url_select = "http://omdbapi.com/?i=#{id}"
    movie_select = HTTParty.get url_select
    @poster = movie_select['Poster']
  end

  erb :movies
end

# Bonus I
# Modify your existing code to allow searches for multiple matches. For example, a search for "Alien" should return a list of clickable links (each of which would then take you to the full results page for the selected movie):
# Alien
# Aliens
# Alien 3
# Alien Resurrection
# My Stepmother Is An Alien
# etc
# The OMDB site documents the parameter you need to use to search for multiple matches.

# Bonus II
# Update your code from bonus I so that if only one movie matches your search you are forwarded directly to that movie's result page.

# Additional Resources
# Dynamic URLs in Sinatra
# Open movie database API
# HTTParty Tutorial
#  pair-programming-bot.md Raw
# Pair Programming Bot
# Recreate this site using Sinatra:

# http://pairprogrammingbot.herokuapp.com/
# You can try to match/steal the existing style or create your own.

