require 'pry'
require_relative 'client'
require_relative 'animal'


def main_menu
  puts "[1] - Current Clients"
  puts "[2] - Current Animals"
  puts "[3] - Register a new Client"
  puts "[4] - Register a new Animal"
  puts "[5] - Adopt a Pet"
  puts "[6] - Put an animal up for adoption"
  puts "[q] - quit"
end


main_menu
print "Please make a selection: "
gets.chomp


$happitails = {
  :clients => [],
  :animals => []
}

def create_client
  puts "Client Creation:"
  print "Enter client name: "
  name = gets.chomp

  print "Enter Client age: "
  age = gets.to_i

  print "Enter no. of children: "
  num_children = gets.to_i

  print "Enter no. of pets: "
  num_pets = gets.to_i

  $happitails[:clients] << Client.new name, age, num_children, num_pets

end

def create_animal
  puts "Animal Creation:"
  print "Enter Animal name: "
  name = gets.chomp

  print "Enter Animal age: "
  age = gets.to_i

  print "Enter gender: "
  gender = gets.chomp

  print "Enter species: "
  species = gets.chomp

  print "Enter no. of toys: "
  num_toys = gets.to_i

  $happitails[:animals] << Animal.new name, age, gender, species, num_toys
end

# Seed data.

$happitails[:clients] << Client.new('John', 24, 1, 1)
$happitails[:clients] << Client.new('Sam', 34, 3, 2)
$happitails[:clients] << Client.new('David', 52, 3, 3)


$happitails[:animals] << Animal.new('Fido', 2, 'male', 'dog', 3)
$happitails[:animals] << Animal.new('Princess', 4, 'female', 'cat', 4)
$happitails[:animals] << Animal.new('Baxter', 7, 'male', 'rat', 2)

binding.pry
