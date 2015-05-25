require 'pry'
require 'rainbow'
require 'csv'
require_relative 'animal'
require_relative 'client'


$shelter = {
  :animals => [],
  :clients => []
}

def create_client
  puts "Client Creation:"
  print "Enter client name: "
  name = gets.chomp

  print "Enter the number of client's children: "
  num_children = gets.to_i

  print "Enter the client's age: "
  age = gets.to_i

  $shelter[:clients] << (Client.new name, num_children, age)

end

def create_animal
  puts "Animal Creation:"
  print "Enter animal name: "
  name = gets.chomp

  print "Enter animal age: "
  age = gets.to_i

  print "Enter the animal's gender: "
  gender = gets.chomp

  print "Enter the animal's species: "
  species = gets.chomp

  $shelter[:animals] << Animal.new(name, age, gender, species)
end

def client_adopt 
  client = fetch_input "Please enter the client's name: "

  animal = fetch_input "Please enter the animals's name: "
  
  if find_client(client) && find_animal(animal)
    puts "These are both valid entries."
    client = find_client(client)
    animal_object = find_animal(animal)
    client.adopt_animal(animal)
    $shelter[:animals].delete(animal_object)
    puts Rainbow("#{client.name} has successfully adopted #{animal}!").green
  else
    puts "These are not valid entries, returning you to main menu"
  end
  puts "Press Enter to continue."
  gets
  main_menu
end

def find_client client_name
  $shelter[:clients].each do |client|
    if client.name.downcase == client_name.downcase
      return client
    end
  end
  return false
end

def find_animal pet_name
  $shelter[:animals].each do |animal|
    if animal.name.downcase == pet_name.downcase
      return animal
    end
  end
  return false
end


def main_menu
  system 'clear'
  puts "\n"
  puts Rainbow("-------------------------------------------------").magenta
  puts Rainbow("[1] - View all animals in the shelter").magenta
  puts Rainbow("[2] - Add a new animal to the shelter").magenta
  puts Rainbow("[3] - View all clients of the shelter").magenta
  puts Rainbow("[4] - Add a new client to the shelter database").magenta
  puts Rainbow("[5] - Organise adoption of animal to client").magenta
  puts Rainbow("[6] - Organise client to put pet up for adoption").magenta
  puts Rainbow("[0] - Quit Application").magenta
  puts Rainbow("-------------------------------------------------").magenta
end

def fetch_number(prompt)
  print prompt
  gets.chomp.to_i
end

def fetch_input(prompt)
  print prompt
  gets.chomp
end


def user_prompt
  user_choice = nil
  main_menu
  while user_choice != 0
    user_choice = fetch_number "Enter your menu selection: "
    case user_choice
    when 1
      print Rainbow("Details for all shelter animals: ").underline
      print "\n"
      $shelter[:animals].each { |animal| puts animal }
      puts "Press Enter to continue."
      gets
      main_menu
    when 2
      create_animal
    when 3
      print Rainbow("Details for all shelter clients: ").underline
      print "\n"
      $shelter[:clients].each { |client| puts client }
      puts "Press Enter to continue."
      gets
      main_menu
    when 4
      create_client
    when 5
      client_adopt
    end
  end
  puts "Saving Data and exiting, thank you."
  # CSV.open("data/clients.csv", "wb") do |csv|
  #   $shelter[:clients].each do |client|
  #     csv << client.keys
  #       $shelter[:clients].each do |x|
  #         csv << x.values
  #       end
  #   end
  # end
end

$shelter[:animals] << Animal.new('Mittens', 7, 'male', 'cat')
$shelter[:clients] << Client.new('Bob', 3, 45)

user_prompt

binding.pry