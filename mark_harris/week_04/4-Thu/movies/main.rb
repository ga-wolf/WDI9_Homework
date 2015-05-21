require "sinatra"
require "sinatra/reloader"
require "httparty"





get "/" do
  erb :home
end




get "/search" do
  @film = params[:title]

  url = "http://www.omdbapi.com/?s=#{ @film }"
  @search_data = HTTParty.get(url)
  data = HTTParty.get(url)

   if @search_data["Search"].length == 1
     url = "http://www.omdbapi.com/?t=#{ @search_data["Search"][0]["Title"] }"
     @film_data = HTTParty.get(url)
     erb :film
   else
    erb :search
   end

end





get "/film" do

  @film = params[:title]
  url = "http://www.omdbapi.com/?t=#{ @film }"
  @film_data = HTTParty.get(url)

  # if film_data["Response"]
  #   @title = film_data["Title"]
  #   @year = film_data["Year"]
  #   @rated = film_data["Rated"]
  #   @released = film_data["Released"]
  #   @runtime = film_data["Runtime"]
  #   @genre = film_data["Genre"]
  #   @director = film_data["Director"]
  #   @actors = film_data["Actors"]
  #   @plot = film_data["Plot"]
  #   @poster = film_data["Poster"]
  # end
  if @film_data["Response"]
    erb :film
  end

end




