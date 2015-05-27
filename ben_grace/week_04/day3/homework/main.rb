require 'pry'
require_relative 'Clients'
require_relative 'Animals'


$shelter = {
  :animals => [],
  :clients => []
}
def main_menu
puts '----------------WELCOME TO HAPPITAILS!----------------'
puts '------------------------------------------------------'
puts 'Main Menu'
puts '[Q] - quit'
puts '[Pets] - List our current pets'
puts '[Clients] - List of our Clients (For employee use only)'
puts '[Adoption] - To adopt a pet'
puts 'Create Client - Create a client file'
puts 'Create Animal - Create an animal file'
end

def fetch_input prompt
  print prompt
  gets.chomp
end

def create_client
  puts "Client Creation!"
  print "Enter client name: "
  name = gets.chomp

  print "Enter clients age: "
  age = gets.to_i

  print "Enter clients number of children: "
  num_children = gets.to_i

  print "Enter clients number of pets: "
  num_pets = gets.to_i

  client = Client.new name, age, num_children, num_pets 

  $shelter[:clients] << client
end

def create_animal
  puts "Animal Creation!"
  print "Enter animals name: "
  name = gets.chomp

  print "Enter animals age: "
  age = gets.to_i

  print "Enter animals gender: "
  gender = gets.chomp

  print "Enter animals species: "
  species = gets.chomp

  animal = Animal.new name, age, gender, species

  print "Please list the animals toys seperated by commas(, ): "
  animal.toys = gets.chomp.split(', ')

  $shelter[:animals] << animal
  # binding.pry
end

def adoption
  puts "What is your client number?: "
  client_number = gets.to_i
  puts "Which animal would you like to adopt"
  animal_number = gets.to_i

  $shelter[:clients][client_number].num_pets += 1
  $shelter[:animals].delete_at(animal_number)
  binding.pry
end


main_menu
# user_choice = fetch_input "Please enter your choice: "

user_choice = " "

until user_choice == 'q'

  user_choice = fetch_input "Please enter your choice: "
  
  if user_choice == 'Create Client'
    create_client
    main_menu

  elsif user_choice == 'Create Animal'
    create_animal

  elsif user_choice == 'Adoption'
    adoption

  elsif user_choice == 'Pets'
      $shelter[:animals].each do |animal|
        puts animal
      end
    end
  end




#Seed Data
#########
#Animals#
#########
# Baz = Animal.new 'Baz', 2, 'Male', 'Dog', 'Rock, Teddy, Sock'

# Sirpawsalot = Animal.new 'Sirpawsalot', 4, 'Male', 'Cat', 'Rag'

# Roger = Animal.new 'Roger', 26, 'Male', 'Bird', 'tuft of grass'

#########
#Clients#
#########

# Chris = Client.new 'Chris', 25, 2, 4

# Sharon = Client.new 'Sharon', 46, 0, 9

# Kev = Client.new 'Kev', 12, 1, 1


# $shelter[:animals] << Baz << Sirpawsalot << Roger
# $shelter[:clients] << Chris << Sharon << Kev
