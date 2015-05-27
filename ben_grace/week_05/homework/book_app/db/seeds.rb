# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Book.destroy_all


Author.create(:name => 'Sara Douglass', :nationality => 'Australian', :dob => '1945/03/7', :image => 'http://www.writerswrite.com/journal/mar03/sarabw.gif')

Book.create(:title => 'Battleaxe', :genre => 'Fantasy', :release_date => '1995/07/23', :image =>  'http://i.harperapps.com/covers/9780732258658/y450-293.png', :blurb => "It's an awesome book. Read it.")