require 'pry'
require 'rainbow'
require_relative 'animal'
require_relative 'client'

$shelter = {
  :animals => [],
  :clients => []
}

def create_animal
  puts Rainbow("Animal Creation.").red

  print Rainbow("Enter animal's name: ").magenta
  name = gets.chomp.capitalize

  print Rainbow("Enter animal's age: ").magenta
  age = gets.to_i

  print Rainbow("Enter animal's gender: ").magenta
  gender = gets.chomp.upcase

  print Rainbow("Enter animal's species type: ").magenta
  species = gets.chomp.upcase

   $shelter[:animals] << Animal.new(name, age, gender, species)
end


def create_client
  puts Rainbow("Client Creation").red

  print Rainbow("Enter client's name: ").magenta
  name = gets.chomp.capitalize

  print Rainbow("Enter client's number of children: ").magenta
  number_of_children = gets.to_i

  print Rainbow("Enter client's age: ").magenta
  age = gets.to_i

  print Rainbow("Enter client's number of pets: ").magenta
  number_of_pets = gets.to_i

  $shelter[:clients] << Client.new(name, number_of_children, age, number_of_pets)
end


#################### FUNCTIONALITY ####################

# At start, the user is prompted with a menu of options:
# display all animals 1/2
# display all clients 1/2
# create an animal 1/2
# create an client 1/2
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process

def display_animals
  $shelter[:animals].each do |animal|
    animal.display
  end
end


binding.pry