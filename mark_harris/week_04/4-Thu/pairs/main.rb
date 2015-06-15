require "sinatra"
require "sinatra/reloader"


# Display the home page
get "/" do
  erb :home
end

# Decide which (non-home) page to display
get "/:page" do

  page = params[:page]

  case page
  when "pass"
    erb :pass
  when "write_test"
    erb :write_test
  when "refactor"
    erb :refactor
  when "do_refactor"
    erb :do_refactor
  when "write_code"
    erb :write_code
  when "new_feature"
    erb :new_feature
  end
  
end


