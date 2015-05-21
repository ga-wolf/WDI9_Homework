require "sinatra"
require "sinatra/reloader"
require "httparty"



get "/" do
  erb :home
end



get "/search" do
  @film = params[:title]

  # Search for films
  url = "http://www.omdbapi.com/?s=#{ @film }"
  @search_data = HTTParty.get(url)


  # if no results       ["Response"] = false
  # if movie not found  ["Response"] = false
  # if many results     ["Response"] doesn't exist but ["Search"] exists
  # if one results      ["Response"] doesn't exist but ["Search"] exists

  if @search_data.has_key?("Search")

    if @search_data["Search"].length == 1
      # Find the search results from OMDB Api
      url = "http://www.omdbapi.com/?i=#{ @search_data["Search"][0]["imdbID"] }"
      @film_data = HTTParty.get(url)

      # Display the film page
      erb :film
    else
      # Display the search results
      erb :search
    end
  else
    # Display an error page
    erb :error
  end

end



get "/film" do

  # Find the film information
  @film = params[:id]
  url = "http://www.omdbapi.com/?i=#{ @film }"
  @film_data = HTTParty.get(url)

  # Test that a film was found
  if @film_data["Response"]
    # Display the film page
    erb :film
  else
    # Display the error page
    erb :error
  end

end




