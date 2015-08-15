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

# Save and restore ("persist") your data to/from a file. Probably using CSV format.


require_relative 'animals'
require_relative 'clients'


$shelter = {}
def animals 
  "cat"
end

clients = []


def main_menu
  puts "Main Menu"
  puts "-" * 20
  puts "1 | - display all animals"
  puts "2 | - display all clients"
  puts "3 | - create an animal"
  puts "4 | - create a client"
  puts "5 | - adopt an animal"
  puts "6 | - put an animal up for adoption"
  puts "7 | - leave"
end


print "\n" "Welcome! What can I help you with today?" "\n" "\n"
main_menu
client_choice = gets.to_i

until client_choice == 7
  if client_choice == 1
  end
end






