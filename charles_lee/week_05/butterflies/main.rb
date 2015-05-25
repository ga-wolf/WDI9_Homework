require 'sinatra'
require 'sinatra/reloader' 
require 'sqlite3'
require 'active_record'

#setup database connection with Active Record
ActiveRecord::Base.establish_connection(
	:adapter => "sqlite3",
	:database => "database.db"
)

#Logs out the AR generated SQL in the terminal. 
# ActiveRecord::Base.logger = logger.new(STDERR) 

#CONVENTION OVER CONFIGURATION
# Convention:
# -- classname should be singular i.e. Butterfly
# -- tablename should be lowercase plural i.e. butterflies

#CREATE CLASS REFERENCING TABLE

require_relative 'butterfly.rb'
require_relative 'plant.rb'

before do 
	@families = Butterfly.select(:family).uniq
end
after do
	ActiveRecord::Base.connection.close
end

# class Butterfly < ActiveRecord::Base
# end

#SQL INJECTION ATTACK, USE OF DODGE STRING 

get '/' do 
	erb :home
end

get '/butterflies' do
	@butterflies = Butterfly.all
	erb :butterflies_index
end

post '/butterflies' do 
	# q = "INSERT INTO butterflies (name, family, image) VALUES ('#{params['name']}','#{params['family']}','#{params['image']}')"
	# db_query q 
	# Create new butterfly object
	butterfly = Butterfly.new 

	#enter the object values, in this case butterfly name, family and image
	butterfly.name = params[:name]
	butterfly.family = params[:family]
	butterfly.image = params[:image]
	butterfly.plant_id = params[:plant_id]

	#save the butterfree 
	butterfly.save

	redirect to("/butterflies/#{butterfly.id}")
end

get '/butterflies/new' do
	erb :butterflies_new
end

get '/butterflies/:id' do
	@butterfly = Butterfly.find params[:id] #No array unwrapping needed, returns actual object. 
	erb :butterflies_show
end

get '/butterflies/:id/delete' do 
	# db_query "DELETE FROM butterflies WHERE id = #{params[:id]}"
	butterfly = Butterfly.find params[:id]
	butterfly.destroy

	redirect to('/butterflies')
end

get '/butterflies/:id/edit' do
	@butterfly = Butterfly.find params[:id]
	erb :butterflies_edit
end

get '/butterflies/family/:family' do
	@butterflies = Butterfly.where(:family => params[:family])
	erb :butterflies_index
end

post '/butterflies/:id'do
	# q = "UPDATE butterflies SET name='#{params[:name]}', family='#{params[:family]}', image='#{params[:image]}'
	#  WHERE id = #{params[:id]}"
	# db_query q
	butterfly = Butterfly.find params[:id]

	butterfly.name = params[:name]
	butterfly.family = params[:family]
	butterfly.image = params[:image]
	butterfly.plant_id = params[:plant_id]

	butterfly.save 

	redirect to("/butterflies/#{params[:id]}")
end

get '/pry' do 
	require 'pry'
	binding.pry
end


## PLANTS ## 

get '/plants' do 
	@plants = Plant.all
	erb :plants_index
end

get'/plants/new' do
	erb :plants_new
end

post'/plants' do
	plant = Plant.new
	plant.name = params[:name]
	plant.image = params[:image]
	plant.save 
	redirect to("/plants/#{plant.id}")
end
get '/plants/:id' do
	@plant = Plant.find params[:id]
	erb :plants_show
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
	redirect to("/plants/#{params[:id]}")
end
get '/plants/:id/delete'do
	plant = Plant.find params[:id]
	plant.destroy

	redirect to("/plants")

end


# def db_query(sql)
# 	db = SQLite3::Database.new 'database.db'
# 	db.results_as_hash = true 
# 	result = db.execute sql
# 	db.close # close connection to database
# 	result 
# end
