# Movies I
# Specification

# Build a search form that lets the user enter a movie name. The Sinatra app will use HTTParty to fetch the data for the chosen movie from OMDB and display it on the page. Display the poster, as a bare minimum.





require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'



# in your view: <%= @movie_data['Plot'] %>
# etc



get '/' do
  @title = params[:title].to_s
  @addy = "/detail/"
  @show_list = true

  if !@title.empty?
    url = "http://omdbapi.com/?s= #{ @title }"
    @movie_data = HTTParty.get url
    @movie_data = @movie_data['Search']

      if @movie_data.length > 1
          @movie_list =""

          @movie_data.each do | m |
  @movie_list << "<a class='movies' href='#{@addy}:#{m["imdbID"]}'> #{m["Title"]} realeased, #{ m["Year"]} </a>"
          
          end
          
      else

      id = @movie_data[0]["imdbID"]
      redirect to("/detail/#{id}")

      end
  end
    

  erb :movie

end


get '/detail/:id' do
 

    id = params[:id]

   
  
    id = id[1..-1] if id.start_with? ":"
  

    url = "http://omdbapi.com/?i=#{ id }"
      @movie_d = HTTParty.get url

      @name = @movie_d["Title"]
      @released = @movie_d["Released"]
      @run_time = @movie_d["Runtime"]
      @poster = @movie_d["Poster"]

      @plot = @movie_d["Plot"]




  erb :detail
end


