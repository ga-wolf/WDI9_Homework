# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Rocket.destroy_all

s5 = Rocket.create :name => "Saturn V", :designer => "Wernher von Braun", :year => 1967, :thrust => 34020, :mass => 2290000, :height => 110.6, :crew => 3, :payload => 118000, :cost => 41300000000, :description => "The largest, most powerful, most successful, and most interesting goddamned machine that humanity has ever had the audacity to make", :delV => 64500
shuttle = Rocket.create :name => "Space Shuttle", :designer => "Walter Dornberger", :year => 1981, :thrust => 30250, :mass => 2030000, :height => 56.1, :crew => 7, :payload => 24400, :cost => 209000000000, :description => "The fattest, most expensive, most luxurious brick that was ever flown to and from space", :delV => 28200