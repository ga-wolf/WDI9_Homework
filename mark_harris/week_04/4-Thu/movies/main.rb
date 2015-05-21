require "sinatra"
require "sinatra/reloader"
require "httparty"





get "/" do
  erb :home
end


get "/film" do

@film = params[:title]

url = "http://www.omdbapi.com/?t=#{ @film }"

#@data = HTTParty.get(url)
data = HTTParty.get(url)

if data["Response"]
  @title = data["Title"]
  @year = data["Year"]
  @rated = data["Rated"]
  @released = data["Released"]
  @runtime = data["Runtime"]
  @genre = data["Genre"]
  @director = data["Director"]
  @actors = data["Actors"]
  @plot = data["Plot"]
  @poster = data["Poster"]
end



erb :film

end
