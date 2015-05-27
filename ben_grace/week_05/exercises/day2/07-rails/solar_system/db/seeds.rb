# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#You can put general seed data in here to make sure you have some data when you first open the site

Planet.destroy_all #this destory everything before you run rake db:seed

Planet.create :name => 'Earth', :orbit => 1, :moons => 1
Planet.create :name => 'Mars', :orbit => 1.5, :moons => 2
Planet.create :name => 'Venus', :orbit => 0.7, :moons => 0
Planet.create :name => 'Jupiter', :orbit => 3.7, :moons => 7
Planet.create :name => 'Neptune', :orbit => 8.6, :moons => 3

