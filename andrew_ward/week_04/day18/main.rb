require 'pry'
require 'rainbow'
require_relative 'animal'
require_relative 'client'

$shelter = {
  :animals => [],
  :clients => []
}

#################### FUNCTIONALITY ####################

# At start, the user is prompted with a menu of options:
# display all animals X
# display all clients X
# create an animal X
# create an client X
# facilitate client adopts an animal 
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process

def main_menu
  puts "[1] - Display animals"
  puts "[2] - Display clients"
  puts "[3] - Enter animal to database"
  puts "[4] - Enter client to database"
  puts "[5] - Client is adopting animal"
  puts "[6] - Client is putting animal up for adoption"
  puts "[7] - Clear"
  puts "[8] - Quit"

  print "Please enter in your choice: "
  response = gets.to_i

  case response
  when 1
    display_animals
  when 2
    display_clients
  when 3
    create_animal
  when 4
    create_client
  when 5
    adopt_animal
  when 6
    deposit_animal
  when 7
    puts `clear`
  when 8
    return Rainbow("badger badger badger badger badger badger badger badger badger badger badger badger badger mushroom mushroom " * 10).yellow
  end

  main_menu
end

def display_animals
  $shelter[:animals].each do |animal|
    animal.display
  end
end

def display_clients
  $shelter[:clients].each do |client|
    client.display
  end
end

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

def adopt_animal

  puts "Who would like to adopt an animal?"

  $shelter[:clients].each_with_index do |client, index|
    puts "[#{index}] -- #{client.name}" ## WTF IS GOIN ON M8
  end

  response = gets.to_i

  adopter = $shelter[:clients][response]

  puts "Which animal would #{adopter.name} like to adopt?"

  $shelter[:animals].each_with_index do |client, index|
    puts "[#{index}] -- #{client.name}"
  end

  input = gets.to_i

  adoptee = $shelter[:animals][input]

  adopter.pets << adoptee

  $shelter[:animals].delete_at(input)

  p adopter.pets

  p $shelter[:animals]

  main_menu

end

def deposit_animal

end

# binding.pry

$shelter[:animals] << Animal.new('George', 28, 'Male', 'Dog')
$shelter[:animals] << Animal.new("Jerry", 88, 'male', 'cat')
$shelter[:animals] << Animal.new('Tom', 24, 'male', 'mouse')

$shelter[:clients] << Client.new('Josh', 24124, 19)
$shelter[:clients] << Client.new("Rand", 0, 24)
$shelter[:clients] << Client.new('Groucho', 3, 76)


# binding.pry

binding.pry

puts 'test'






























