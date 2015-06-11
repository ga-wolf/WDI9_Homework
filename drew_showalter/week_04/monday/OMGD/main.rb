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
    ret = HTTParty.get url
    @the_movies = ret['Search']
    num_movies = @the_movies.length

    #this append loop concats the movie poster key:url pair onto the generic search array of data
    if num_movies > 0
      @the_movies.each do |mov|
        @title = mov['Title']
        id = mov['imdbID']
        url_select = "http://omdbapi.com/?i=#{id}"
        movie_select = HTTParty.get url_select

        #checks to see if there is ur data, and inputs a generic image if there is none
        if movie_select['Poster']
          mov['Poster'] = movie_select['Poster']
        else
          mov['Poster'] = #generic movie poster url
      end
    end
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

