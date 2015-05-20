# ruby main.rb
require "pry"
require "rainbow"
require_relative "animal"
require_relative "client"


$shelter = {  :animals => [],
              :clients => []
            }

# Create a new client
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

# Create a new animal
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


# Display the main menu
def main_menu
  puts "\n"
  puts "[1] Display all animals"
  puts "[2] Display all clients"
  puts "[3] Create an animal"
  puts "[4] Create an client"
  puts "[5] Adopt an animal"
  puts "[6] Put an animal up for adoption"
  puts "[0] Quit"
  print "Make a selection: "
  user_choice = gets.chomp
end

# Display the list of clients
def client_list
  puts "\n"
  # Find all clients
  $shelter[:clients].each_with_index do |client, i|
    puts "[#{i}] #{client.name}"
  end
  print "Select the client: "
  user_choice = gets.chomp
end

# Display the list of animals in the shelter
def animal_list
  puts "\n"
  # Find all animals
  $shelter[:animals].each_with_index do |animal, i|
    puts "[#{i}] #{animal.name}"
  end
  print "Select who is being adopted: "
  user_choice = gets.chomp
end

# Display the list of pets a client has
def pets_list client
  if valid_client?(client)
    if $shelter[:clients][client.to_i].pets.length == 0
      puts Rainbow("\nNo pets to put up for adoption").magenta
      ""
    else
    puts "\n"
      # create a list of pets the client has
      $shelter[:clients][client.to_i].pets.each_with_index do |animal, i|
        puts "[#{i}] #{animal.name}"
      end
      print "Select who is being left: "
      user_choice = gets.chomp
    end
  else
    ""
  end
end

# Transfer an animal from shelter => client
def adopt_animal client, animal
  unless valid_client?(client) && valid_animal?(animal)
    puts Rainbow("\nSelection not valid, please try again").magenta
  else
    puts Rainbow("\n#{$shelter[:animals][animal.to_i].name} has been adopted by #{$shelter[:clients][client.to_i].name}").magenta
    # add the animal to the clients list of pets
    $shelter[:clients][client.to_i].pets << $shelter[:animals][animal.to_i]
    # remove animal from the list in the shelter
    $shelter[:animals].delete_at(animal.to_i)
  end
end

# Transfer an animal from client => shelter
def leave_animal client, animal
  unless valid_client?(client) && valid_animal?(animal)
    puts Rainbow("\nSelection not valid, please try again").magenta
  else
    puts Rainbow("\n#{$shelter[:clients][client.to_i].pets[animal.to_i].name} has been given up by #{$shelter[:clients][client.to_i].name}").blue

    # add the animal to the list in the shelter
    $shelter[:animals] << $shelter[:clients][client.to_i].pets[animal.to_i]
    # remove the animal from the client's list of animals
    $shelter[:clients][client.to_i].pets.delete_at(animal.to_i)
  end
end

# Confirm the animal selection is in the valid range
def valid_animal? animal
  if animal == "" || (animal.to_i < 0 && animal.to_i >= $shelter[:animals].length)
    false
  else
    true
  end
end

# Confirm the client selection is in the valid range
def valid_client? client
  if  client == "" || (client.to_i < 0 && client.to_i >= $shelter[:clients].length) 
    false
  else
    true
  end
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

until user_choice == "0" 

  case user_choice
  when "1"
    puts "\n\n"
    puts $shelter[:animals]
  when "2"
    puts "\n\n"
    puts $shelter[:clients]
  when "3"
    puts "\n\n"
    create_animal
  when "4"
    puts "\n\n"
    create_client
  when "5"
    adopt_animal client_list, animal_list
  when "6"
    client = client_list
    leave_animal client, pets_list(client)
  end

  user_choice = main_menu

end







