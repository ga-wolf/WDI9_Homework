# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Planet.destroy_all
Moon.destroy_all

require 'csv'

e1 = Planet.create(:name => "Earth", :orbit => 3, :mass => "5.972 e 24 kg", :radius => 6371, :image => "http://www.8planets.co.uk/wp-content/themes/8planets/images/earth_lg.jpg")
m1 = Planet.create(:name => "Mercury", :orbit => 2, :mass => "3.3022 e 23 kg", :radius => 2440, :image => nil)
# m1 = Moon.create(:name => "Moon", :orbit => 1, :mass => "7.348 e 22 kg", :radius => 1737.4, :image => "http://img.rt.com/files/news/22/cd/50/00/biggest-meteor-impact-moon.si.jpg")



CSV.foreach("moons.csv", encoding: "ISO8859-1") do |row|
  Moon.create :name => row[0], :radius => row[1], :planet => row[2]
end