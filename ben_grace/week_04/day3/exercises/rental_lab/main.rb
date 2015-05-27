##The main is just for the presentation to the user. There should be no actual data processing happening here. Just links to the data pages which are pulled into this one.

#Seperation of concerns bitches!

require 'pry'
require_relative 'tenant'
require_relative 'apartment'
require_relative 'building'

def create_tenant #presentation to user. 
  puts "Tenant Creation"
  print "Enter tenant name: "
  name = gets.chomp

  print "Enter tenant age: "
  age = gets.to_i

  print "Enter the tenants gender: "
  gender = gets.chomp

  Tenant.new name, age, gender 
end

def create_apartment
  puts" Apartment Creation:"
  Print "Enter Apartment name: "
  name = gets.chomp

  print "Enter sqft: "
  sqft = gets.to_i

  print "Enter number of bathrooms: "
  num_bathrooms = gets.to_i

  print "Enter number of bedrooms: "
  num_bedrooms = gets.to_i

  Apartment.new name, sqft, num_bathrooms, num_bedrooms
end

def create_building
  puts "Building Creation"
  print "Enter the address: "
  address = gets.chomp

  print "Enter the style: "
  style = gets.chomp

  print "Does it have a doorman?: "
  has_doorman = (gets.chomp.downcase == 'yes')

  print "Does it have an elevator?: "
  has_elevator = (gets.chomp.downcase == 'yes')

  print "Enter number of floors: "
  num_floors gets.to_i

  Building.new address, style, has_doorman, has_elevator, num_floors
end

#Seed data...
tenants = []
tenants << Tenant.new('Craigsy', 44, 'Male')
tenants << Tenant.new('Jonesy', 22, 'Male')
tenants << Tenant.new('Kath', 90, 'Female')

b1 = Building.new '123 Fake Street', 'Gothic', false, false, 18
b2 = Building.new '700 Bush Street', 'Industrial', false, true, 100

b1.apartments['Apartment 1'] = Apartment.new 'Apartment 1', 1000, 2, 2
b1.apartments['Apartment 7'] = Apartment.new 'Apartment 7', 800, 5, 3
b2.apartments['Apartment 9'] = Apartment.new 'Apartment 9', 1200, 22, 11

b1.apartments['Apartment 1'].tenants << tenants[0]
b1.apartments['Apartment 7'].tenants << tenants[1]
b2.apartments['Apartment 9'].tenants << tenants[2]

buildings = []

buildings << b1 << b2

binding.pry