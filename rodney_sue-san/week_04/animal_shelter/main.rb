# Title: HappiTails
# Objective:

# Practice creating objects
# Explanation

# You are the manager at HappiTails animal shelter. You need to manage your shelter by storing and manipulating information about clients and animals.
# Specification:

# Object Specs:

# Animal:

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.
# Client:

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a number of pets.
# You may also want a global $shelter variable in which you can store the animals and clients.

# Relationships:

# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption.
# Phase 1

# Can create animals and clients with Ruby code: Animal.new( ... ), Client.new( ... )
# Phase 2

# New animals and clients can be added to the shelter: $shelter['animals'] << Animal.new( ... )
# Phase 3

# When creating an animal or client, the user is prompted for information like names, gender etc.
# Phase 4

# At start, the user is prompted with a menu of options:
# display all animals
# display all clients
# create an animal
# create an client
# facilitate client adopts an animal
# facilitate client puts an animal up for adoption
# After selecting from the menu the task the user is prompted through the entire process
# Bonus: Crappy database

# Save and restore ("persist") your data to/from a file. Probably using CSV format
require "pry"
require_relative "Animal"
require_relative "Client"

$shelter = { :animals => [], :clients => [] }



#-----------------------------displaying info--------------------------------------------------



######################################clients#################################################


def list_clients
  puts `clear`


  clients = $shelter[:clients]

  clients.each_with_index do | c, index |
    name = c.name
    pets =  c.pets?
    age = c.age
    gender = c.gender
    kids =  c.kids

    puts "[#{ (index+1)}] #{name.ljust(18)}  Age: #{age}      kids: #{kids}      # Of pets:#{pets}"
  end
    puts
    puts "[b] back to main menu"
    puts
    user_choice = fetch_input "Enter selection: "
    client_choice( user_choice )

end


def client_choice(selection)
  if selection.downcase == 'b'
    menu_select
  elsif selection.to_i > $shelter[:clients].length
    puts "invalid input try again"
    gets
    list_clients
  else
    index = (selection.to_i) -1
    client_details( index )
  end

end



def client_details(selection)
    client = $shelter[:clients][selection]
    name = client.name
    pets =  client.pets?
    age = client.age
    gender = client.gender
    kids =  client.kids
  puts `clear`
  puts "--------------------------------------------------------"
  puts "Name: #{name}"
  puts "Age: #{age}" 
  puts "Gender: #{gender}"
  puts "kids: #{kids}"
  puts "Number of pets: #{pets}"
  puts 

  if pets != 0
    pets =  $shelter[:clients][selection].pets

    pets.each do | p |
      name = p.name
      species = p.species
      age = p.age
      gender = p.gender
      toys = p.toys.join(", ")

      puts "Owns a #{species} named #{name}. Who is #{age} years old, #{gender}."
      puts "Toys: #{toys}"
    end

  end
  puts
  puts "----------------------------------------------------------"
  puts 
  puts "[1] Adopt a pet    [2] Put pet for adoption   [b] back "
  puts
  user_choice = fetch_input "enter selection: "
  user_choice = user_choice.to_i

  if user_choice == 1
    adopt_animal(selection)
  elsif user_choice == 2
    if client.pets? > 0
      give_away_animal(selection)
    else
      puts "No pets to give away"
      gets
      client_details(selection)
    end
  else
    list_clients
  end
    

end
###################################clients End#################################


###################################Animals display#####################################
def display_animals(animals)
  puts `clear`

  
  animals.each_with_index do | c, index |
    name = c.name
    species =  c.species
    age = c.age
    gender = c.gender
    toys = c.toys?

    puts "[#{ (index+1)}] Species: #{species.ljust(6)}    Age: #{age}   Gender: #{gender.ljust(6)}   Age: #{age}   Name: #{name}"
  end
    

    puts
    puts "[b] back to main menu"
    puts
    user_choice = fetch_input "Enter selection: "


end


def list_animals
    user_choice = display_animals( $shelter[:animals] )
    animal_choice(user_choice)

end

def animal_choice(selection)
  if selection.downcase == 'b'
    menu_select
  elsif selection.to_i > $shelter[:animals].length
    puts "invalid input try again"
    gets
    list_animals
  else
    animal_details( (selection.to_i)-1 )
  end

end


def animal_details(selection)
    name = $shelter[:animals][selection].name
    age = $shelter[:animals][selection].age
    gender = $shelter[:animals][selection].gender
    species =  $shelter[:animals][selection].species
    toys =  $shelter[:animals][selection].toys

  puts `clear`
  puts "--------------------------------------------------------"
  puts
  puts "Name: #{name}"
  puts "Species: #{species}"
  puts "Age: #{age}" 
  puts "Gender: #{gender}"
  puts "Number of toys: #{toys.length}"
  puts 

  if toys.length != 0

    puts "Toys: #{ toys.join(", ") }"

  end

  puts "----------------------------------------------------------"
  puts
  gets
  list_animals
end

##################################### Animals Display end #######################################


################################### Adopting and Give Away ##############################


def adopt_animal(selection)
    animals = $shelter[:animals]
    client = $shelter[:clients][selection]

    user_choice = display_animals(animals)

    if user_choice.downcase == "b"
      list_clients
    elsif user_choice.to_i == 0
      adopt_animal(selection)
    elsif user_choice.to_i > animals.length
      adopt_animal(selection)
    else
      user_choice = (user_choice.to_i) -1

      animal = $shelter[:animals][ user_choice ]
      $shelter[:clients][selection].pets << animal
      puts "#{client.name} has just adopted #{animal.name} the #{animal.species}"
      $shelter[:animals].delete_at( user_choice )
      gets
    end

    client_details(selection)
      
end


def give_away_animal(selection)
    animals = $shelter[:clients][selection].pets

    user_choice = display_animals(animals)

    if user_choice.downcase == "b"
      client_details(selection)
    elsif user_choice.to_i == 0 || user_choice.to_i > animals.length
      puts "Invalid selection"
      gets
      give_away_animal(selection)
    else
      client = $shelter[:clients][selection]
      animal = client.pets[ (user_choice.to_i) -1 ]

      puts "#{client.name} has put #{animal.name} the #{animal.species} for adoption :("
      
      $shelter[:animals] << animal
      $shelter[:clients][selection].pets.delete_at( (user_choice.to_i)-1 )
      gets
    end

    client_details(selection)

end


######################################### Adopting and give away end ##########################



def main_menu
  puts "---------------Animal shelter 4.5A-----------"
  puts
  puts "[1] List clients"
  puts "[2] List animals for adoption"
  puts "[3] Add a new client"
  puts "[4] Add a new animal"
  puts
  puts
  puts "[5] exit"
  puts "---------------------------------------------"
end

#--------------------------------------displying info end------------------------------------------





####################------------------------Data in start-----------------------####################


def add_new_client
  client = create_client
  $shelter[:clients] << client
  puts client.detail_info?
  puts "Successfully added"
  gets
end

def add_new_animal
  animal = create_animal
  $shelter[:animals] << animal
  puts animal.detail_info
  puts "Successfully added"
  gets
end


###################-------------------------Data in end---------------------------####################



############################################factories###########################################
def create_client
  puts "Client Creation: "
  print "Enter client name: "
  name = gets.chomp

  print "Enter client age: "
  age = gets.to_i

  print "Enter client gender: "
  gender = gets.chomp

  print "How many kids: "
  kids = gets.chomp

  Client.new name, age, gender, kids

end


def create_animal
  puts "Animal Creation"
  print "Enter animal name: "
  name = gets.chomp

  print "Enter age: "
  age = gets.to_i

  print "Enter gender: "
  gender = gets.chomp

  print "Enter species: "
  species = gets.chomp

  print "Enter toys: "
  toys = gets.chomp

  toys = toys.split(" ")

  Animal.new name, age, gender, species, toys

end

############################################factories End##########################################


def fetch_input(prompt)
    print prompt
    gets.chomp
end

def menu_select
  user_choice = 0

  until user_choice == 5
    case user_choice
      when 1
        list_clients
      when 2
        list_animals
      when 3
        add_new_client
      when 4
        add_new_animal
      end

    puts `clear`
    main_menu
    user_choice = fetch_input "Please enter your selection: "
    user_choice = user_choice.to_i

  end
end


$shelter[:animals] << Animal.new("Harry", 3, "male", "dog", ["sock", "rubber bone"] )
$shelter[:animals] << Animal.new("Lilly", 1, "female", "budgie", ["bell"] )
$shelter[:animals] << Animal.new("Timmy", 5, "male", "cat", ["rubber fish", "stuffed mouse"] )
$shelter[:animals] << Animal.new("Chico", 3, "male", "cat", ["stuffed mouse"] )
$shelter[:animals] << Animal.new("Deedee", 2, "female", "cat", ["ball of wool", "barbie doll"] )

$shelter[:clients] << Client.new("Larry", 41, "male", 2)
$shelter[:clients] << Client.new("Sally", 25, "female", 0)
$shelter[:clients] << Client.new("Sam", 32, "male", 5)

$shelter[:clients][0].pets << Animal.new("Danni", 2, "female", "dog", ["stuffed bear", "football"] )


menu_select




