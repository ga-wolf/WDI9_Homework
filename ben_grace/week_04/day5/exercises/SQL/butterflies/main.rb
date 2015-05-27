require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record' #inclues the active record gem

#sets up our connection to the database.db.
ActiveRecord:: Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR) #logs out the AR generated SQL in the terminal

#These all need to be set after requiring the gems and the acitve record stuff
require_relative 'butterfly'
require_relative 'plant'

#convention over configuration.
#active records convention: classname is singular / tablename is lowercase plural
#############
# class Butterfly < ActiveRecord::Base #All the code we don't need to write comes from here.
# end

# class Plant < ActiveRecord::Base
# end
#############

before do #runs before everything else happens
  @families = Butterfly.select(:family).uniq
end

after do
  ActiveRecord::Base.connection.close
end

get '/pry' do #Sneaky way to get into pry
  require 'pry'
  binding.pry
end

get '/' do
 erb :home 
end

# The below get statement was the long way of building up each of the get requests.

# The first line opens up the database which we are wanting to use.
# The second line is a way to return the results into a hash rather than an array so it is easier to retrieve their data.
# The third line is a entering into the database and retrieving all of the data (in this case butterflies) and saving them in an instance variable which was set as @butterflies
# The fourth line is saying which page to redirect to when '/butterflies' is added to the url
#######################
#######################
# get '/butterflies' do
#   db = SQLite3::Database.new 'database.db'
#   db.results_as_hash = true
#   @butterflies = db.execute "SELECT * FROM butterflies"
#   erb :butterflies_index
# end
#######################
#The * symbol means all
#######################
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end
#######################
#This is a shorter way of writing the above code where the first 3 lines have been substituted into a method to keep the code dry.
#######################
#######################
post '/butterflies' do
  # q = "INSERT INTO butterflies (name, family, image) VALUES ('#{params['name']}', '#{params['family']}', '#{ params['image'] }' )" 
  # db_query q

  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]

  butterfly.save

  redirect to("/butterflies/#{ butterfly.id }")
end
#######################
#The code above is how we insert new butterflies into the database. The 'INSERT INTO butterflies' is saying insert the following 'params' into the listed arguments (name, family, image). The paramaters are received from the form on the page 'butterflies_new.erb'. It can receive the paramaters are received based on the name of the inputs on the form.
#######################
#######################
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end
#######################
#This code takes the current butterfly id and redirects you to the butterfly_edit page where it's information can be changed. It goes through the database and returns the butterfly with the equal id to what was entered into the browser.. The butterfly.first makes sure that only the first entry found is returned.

post '/butterflies/:id' do
    #######
    #Old code using SQL
    ######
    # q = "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
    # db_query q
    #############
    butterfly = Butterfly.find params[:id]
    #dont put spaces between params and the []!!!!
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.plant_id = params[:plant_id]

    butterfly.save

    redirect to ("/butterflies/#{params[:id]}")
end

#This is the code that changes the selected butterflies attributes. It is setup like the form field in the create a butterfly but instead of adding a new entry to the database it just updates the butterflies who's id you selected with new information. Once again the params are received by the name value given to the input field on the butterflies_edit.erb page
#########################
get '/butterflies/:id/delete' do
  # db_query "DELETE FROM butterflies WHERE id=#{ params[:id].to_i }"
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end
############
#This is not the best way to delete a butterfly but it works. Basically it goes into the database finds the id of the butterfly you are currently looking at and removes it from the database. It then finaly redirects you back to the butterflies_index.erb so you can see that it has been removed.
#####
#WARNING don't do this on a live page. It will result in all of you data being deleted when google trawls your site.
#############
#############
get '/butterflies/new' do
  erb :butterflies_new
end
##########
#This just takes you to the butterflies_new.erb. Nothing interesting to see here.
##########

# get '/butterflies/:id' do
#   db = SQLite3::Database.new 'database.db'
#   db.results_as_hash = true
#   @butterfly = db.execute "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
#   @butterfly = @butterfly.first #Get the single butterfly out of the array

#   erb :butterflies_show
# end

####################
#old way!
####################
# get '/butterflies/:id' do
#   @butterfly = db_query "SELECT * FROM butterflies WHERE id = #{ params[:id] }"
#   erb :butterflies_show
# end

get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

get '/butterflies/family/:family' do #Where lets you choose what you want to pick in this case it lets you choose the family
  @butterflies = Butterfly.where(:family => params[:family])
  erb :butterflies_index
end
#########################
#This goes through the database and selects the butterfly based on the id entered. It then opens up the 'butterflies_show.erb' file with that id as the final argument.
#########################

# def db_query(sql)
#   db = SQLite3::Database.new 'database.db'
#   db.results_as_hash = true

#   result = db.execute sql

#   db.close #Super important step or the database will remain open until it finally can't open a new one and an error message will occur.

#   result
# end 

#######
#Method built to keep the code dry. It essentially opens up the database each time it is called and runs the SQL that is entererd in as the argument. It then finally closes data base.


#######
#End butterfly CRUD
#######


get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]

  plant.save

  redirect to ("/plants/#{ plant.id }")
end

get '/plants/new'do #order matters! More specific at the top son! aka put /new before/:id or it will think the id is 'new'
  erb :plants_new
end

get '/plants/:id' do
  @plants = Plant.find params[:id]
  erb :plants_show
end

get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy

  redirect to('/plants')
end

get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

post '/plants/:id' do
  plant = Plant.find params[:id]

  plant.name = params[:name]
  plant.image = params[:image]

  plant.save

  redirect to ("/plants/#{ plant.id }")
end









  