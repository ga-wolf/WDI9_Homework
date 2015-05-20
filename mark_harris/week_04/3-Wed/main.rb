# ruby main.rb
require "pry"
require "rainbow"
require_relative "animal"
require_relative "client"


$shelter = {  :animals => [],
              :clients => []
            }


def create_client
  puts "Client Creation"
  print "Enter the client's name: "
  name = gets.chomp

  print "Enter the client's age: "
  age = gets.to_i

  print "Enter the number of children: "
  num_children = gets.to_i

  $shelter[:clients] << Client.new(name, age, num_children)

  puts Rainbow("#{name} is looking to adopt an animal").green
end


def create_animal
  puts "Animal Creation"
  print "Enter the animal's name: "
  name = gets.chomp

  print "Enter the animal's age: "
  age = gets.to_i

  print "Enter the animal's gender: "
  gender = gets.chomp

  print "Enter the species of animal: "
  species = gets.chomp

  $shelter[:animals] << Animal.new(name, age, gender, species)

  puts Rainbow("#{name} has been taken in at the shelter").green
end



def main_menu
  puts "\n\n"
  puts "[1] Display all animals"
  puts "[2] Display all clients"
  puts "[3] Create an animal"
  puts "[4] Create an client"
  puts "[5] Adopt an animal"
  puts "[6] Put an animal up for adoption"
  puts "[0] Quit"
  print "Make a selection: "
  user_choice = gets.to_i
end


def client_list
  puts "\n"
  # create a list of the registered clients
  $shelter[:clients].each_with_index do |client, i|
    puts "[#{i}] #{client.name}"
  end
  print "Select the client: "
  user_choice = gets.to_i
end


def animal_list
  puts "\n"
  # create a list of animals in the shelter
  $shelter[:animals].each_with_index do |animal, i|
    puts "[#{i}] #{animal.name}"
  end
  print "Select who is being adopted: "
  user_choice = gets.to_i
end


def pets_list client
  puts "\n"
  # create a list of pets the client has
  $shelter[:clients][client].pets.each_with_index do |animal, i|
    puts "[#{i}] #{animal.name}"
  end
  print "Select who is being left: "
  user_choice = gets.to_i
end


def adopt_animal client, animal
  
  puts Rainbow("\n#{$shelter[:animals][animal].name} has been adopted by #{$shelter[:clients][client].name}").magenta

  # add the animal to the clients list of pets
  $shelter[:clients][client].pets << $shelter[:animals][animal]
  # remove animal from the list in the shelter
  $shelter[:animals].delete_at(animal)
end


def leave_animal client, animal

  puts Rainbow("\n#{$shelter[:clients][client].pets[animal].name} has been given up by #{$shelter[:clients][client].name}").blue

  # add the animal to the list in the shelter
  $shelter[:animals] << $shelter[:clients][client].pets[animal]
  # remove the animal from the client's list of animals
  $shelter[:clients][client].pets.delete_at(animal)
end


a1 = Animal.new("Sweep", 2, "male", "dog")
a2 = Animal.new("Tony", 6, "male", "tiger")
a3 = Animal.new("Ceilia", 13, "female", "snake")
c1 = Client.new("Dave", 26, 1)
c2 = Client.new("Jim", 32, 4)
c3 = Client.new("Kain", 35, 2)

$shelter[:animals] << a1 << a2 << a3
$shelter[:clients] << c1 << c2 << c3


system "clear"
user_choice = main_menu

until user_choice == 0 

  case user_choice
  when 1
    puts "\n\n"
    puts $shelter[:animals]
  when 2
    puts "\n\n"
    puts $shelter[:clients]
  when 3
    puts "\n\n"
    create_animal
  when 4
    puts "\n\n"
    create_client
  when 5
    adopt_animal client_list, animal_list
  when 6
    client = client_list
    leave_animal client, pets_list(client)
  end

  #binding.pry
  user_choice = main_menu

end







