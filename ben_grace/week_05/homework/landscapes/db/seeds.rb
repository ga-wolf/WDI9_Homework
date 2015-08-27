# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Fuji', :climbers_killed => 10, :height => 40.5
Mountain.create :name => 'Mount Kilimanjaro', :climbers_killed => 10, :height => 40.5
Mountain.create :name => 'Mount Everest', :climbers_killed => 10, :height => 40.5
