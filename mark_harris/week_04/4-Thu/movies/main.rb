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


  # if no results       ["Response"] = false
  # if movie not found  ["Response"] = false
  # if many results     ["Response"] doesn't exist but ["Search"] exists
  # if one results      ["Response"] doesn't exist but ["Search"] exists

  if @search_data.has_key?("Search")

    if @search_data["Search"].length == 1
   
      url = "http://www.omdbapi.com/?t=#{ @search_data["Search"][0]["Title"] }"
      @film_data = HTTParty.get(url)
      erb :film
 
    else
 
      erb :search
 
    end

  else

    erb :error
  
  end

end



get "/film" do

  @film = params[:title]
  url = "http://www.omdbapi.com/?t=#{ @film }"
  @film_data = HTTParty.get(url)

  if @film_data["Response"]
    erb :film
  end

end




