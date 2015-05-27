require 'pry'
require_relative 'client'
require_relative 'animal'
# Title: HappiTails
#I've got a little happy trail, you should check it out, run your fingers through its luscious curls
#mmmmmmmmmm flavor-text, it's almost always sexual
#don't go! I love our little talks!

# Objective:
# Practice creating objects
# Explanation
# You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
# Specification:
# Object Specs:
# Animal:
# An animal should be hairy! LIKE ANIMAL
# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.
# Client:
# A client should always be fuck-able, not necessarily 10/10s, but still 'fit'
# A client should have a name.
# A client should have a number of children. preferrably none
# A client should have an age. preferrably under 30
# A client should have a number of pets.

# You may also want a global $shelter variable in which you can store the animals and clients.
animals = []
clients = []


# Relationships:
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption.
# Phase 1

# Can create animals and clients with Ruby code: Animal.new( ... ), Client.new( ... )
# Phase 2
clients << Client.new('Timmy', 23, 2)
clients << Client.new('Brady', 19, 0)
animals << Animal.new('Berago', 27, 'male', 'calico',['squeaky toy', 'scratch post'])
animals << Animal.new('Bertram', 3, 'male', 'bulldog',['squeaky toy', 'bone'])
animals << Animal.new('Tegan', 19, 'female', 'calico',['ball', 'scratch post', 'tape'])
animals << Animal.new('Betty', 27, 'female', 'horse',['doll'])
$shelter = {"animals" => animals, "clients" => clients}


# New animals and clients can be added to the shelter: $shelter['animals'] << Animal.new( ... )
# Phase 3

# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4
def start_menu
  system 'clear'
  puts "WELCOME TO THE SHELTER"
  puts "[da] - Display all animals up for adoption"
  puts "[dc] - Display all clients"
  puts "[a] - Create a new animal"
  puts "[c] - Create a new client"
  puts "[ad] - facilitate an adoption"
  puts "[sad] - facilitate a return to the shelter"
  puts "[q] -- Exit the program"
  p "Please enter a command: "
  input = gets.chomp
  input_selector input
end


def input_selector input
  case input
  when 'q'
    puts "Thanks for using this pile of garbage!"

  when 'ad'
    adoption_menu

  when 'sad'
    return_menu

  when 'da'
    $shelter['animals'].each { |el| puts el.name }
    p "press enter to return to main menu"
    cont = gets.chomp
    if cont == ''
      start_menu
    end

  when 'dc'
    $shelter['clients'].each { |el| puts el.name }
    p "press enter to return to main menu"
    cont = gets.chomp
    if cont == ''
      start_menu
    end

  when 'a'
    puts "CREATING A NEW ANIMAL"
    p "Enter the animal's name: "
    name = gets.chomp
    p "Enter the animal's age: "
    age = gets.to_i
    p "Enter the animal's gender: "
    gender = gets.chomp
    p "Enter the animal's species: "
    species = gets.chomp
    p "Please enter all of the animal's toys: "
    toys = gets.chomp.split(' ')
    $shelter['animals'] << Animal.new(name, age, gender, species, toys)
    puts "Congrats on finding a new animal for the shelter!"
    p "press enter to return to main menu"
    cont = gets.chomp
    if cont == ''
      start_menu
    end

  when 'c'
    puts "CREATING A NEW CLIENT"
    p "Enter the client's name: "
    name = gets.chomp
    p "Enter the client's age: "
    age = gets.to_i
    p "Enter the client's gender: "
    num_children = gets.to_i
    $shelter['clients'] << Client.new(name, age, num_children)
    puts "Congrats on finding a new supporter of the shelter!"
    p "press enter to return to main menu"
    cont = gets.chomp
    if cont == ''
      start_menu
    end

  end
end

def adoption_menu
  puts "SO YOU WANT TO ADOPT?"
  p "Please enter your name: "
  client_name = get_x("clients", gets.chomp)

  p "Excellent! Please enter the name of the animal you'd like to adopt: "
  animal_name = get_x("animals", gets.chomp)
  
  client = $shelter["clients"].select { |el| el.name == client_name }
  client[0].adopt(animal_name)

  p "Congrats #{client_name}, you've adopted #{animal_name}"
  p "press enter to return to main menu"
  cont = gets.chomp
  if cont == ''
    start_menu
  end
end

def return_menu
  puts "SO YOU WANT TO RETURN A PET?"
  p "Please enter your name: "
  client_name = get_x("clients", gets.chomp)
  client = $shelter["clients"].select { |el| el.name == client_name }

  p "Excellent! Please enter the name of the animal you'd like to return: "
  user_ans = $shelter['clients'].select { |el| el.name == client_name }[0].animals 
  animal_name = get_within(user_ans, gets.chomp)

  client[0].unadopt(animal_name)

  p "Sorry #{client_name}, you've given back #{animal_name}"
  p "press enter to return to main menu"
  cont = gets.chomp
  if cont == ''
    start_menu
  end
end

def get_x (ans_or_client, name)
  until ( element_find(ans_or_client, name) != [] ) do
    puts "Not a name, please try again: "
    name = gets.chomp
  end
  name
end

def get_within (array, name)
  until ( array.select { |el| el[0].name == name } != [] ) do
    puts "Not a name, please try again: "
    name = gets.chomp
  end
  name
end


def element_find (ans_or_client, name)
  $shelter[ans_or_client].select { |el| el.name == name }
end


# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process
# Bonus: Crappy database
start_menu

binding.pry
# Save and restore ("persist") your data to/from a file. Probably using CSV format.