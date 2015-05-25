require 'pry'
require_relative 'clients'
require_relative 'animals'

$shelter = {
  'Animals' => [],
  'Clients' => []
}

def add_animal
  puts "So you're adding an animal to our little shelter huh?"
  print "What's it's name? "
  name = gets.chomp.capitalize

  print "Cute! How old is it? "
  age = gets.chomp.to_i

  print "Is it a male or female? "
  gender = gets.chomp.capitalize

  print "What IS it? "
  species = gets.chomp.capitalize

  $shelter['Animals'] <<  Animal.new(name, age, gender, species)

  puts "Lovely! Our shelter now looks like this"
  print display_animals

end

def add_client
  puts "So you wanna be a new client for our shelter huh? "
  print "What's your name? "
  name = gets.chomp.capitalize

  print "Neato! Have many children might you have? "
  num_children = gets.chomp.to_i

  print "Okay then, how old are you? "
  age = gets.chomp.to_i

  $shelter['Clients'] << Client.new(name, num_children, age)
end

def display_animals
  puts $shelter['Animals']
end

def display_clients
  puts $shelter['Clients']
end

def adopt_animal 
  print "Okay then, who are you? "
  client_name = gets.chomp.capitalize
  $shelter['Clients'].each do |c|
    if c.name == client_name                             # Iterate through the clients and find the inputted client name
      puts "Okay we have found you!"
      puts "Which animal would you like ?"
      display_animals

      want_animal = gets.chomp.capitalize                # After it has found them, have them input the name of the animal they want
      $shelter['Animals'].each do |a|                    # Iterate through the animals and find the inputted animal name
        if a.name == want_animal
          puts "Sure thing!"
          c.num_pets += 1                                # Adds 1 to the num_pets of the client and inserts chosen animal into 'pets'
          c.pets << a
          remove_animal = $shelter["Animals"].index(a)   # Find index of the animal in the shelter
          $shelter["Animals"].delete_at(remove_animal)   # Remove that animal at that index
        else 
        end
      end
    end
  end
end

def deposit_animal
  puts "Righteo, so you're depositing an animal today huh?"
  print "What is your name? "
  client_name = gets.chomp.capitalize
  $shelter['Clients'].each do |c|
    if c.name == client_name
      puts "Okay we've found you!"
      puts "Which of your animals do you want to drop off?"
      puts c.pets

      drop_animal = gets.chomp.capitalize
      c.pets.each do |a|
        if a.name == drop_animal
          puts "Sure thing!"
          c.num_pets -= 1
          remove_animal = c.pets.index(a)
        end
      end
    else puts "asdojasdo"
    end
  end 


end


yuki = Animal.new 'Yuki', 17, 'Female', 'Cat' 
josh = Client.new 'Josh', 4, 24
$shelter['Animals'] << yuki
$shelter['Clients'] << josh

puts "Welcome to HappiTails! "
menu = puts "What would you like to do today?
      [1] - Display Animals
      [2] - Display Clients
      [3] - Add Animal to our shelter
      [4] - Add yourself as a client
      [5] - Adopt Animal
      [6] - Deposit Animal
      [7] - Quit "


user_choice = gets.chomp.to_i 

until user_choice == 7

  case user_choice 
  when 1
    display_animals
  when 2
    display_clients
  when 3 
    add_animal
  when 4
    add_client
  when 5
    adopt_animal
  when 6
    deposit_animal
  else 
    puts "Put a valid option please"
  end

  menu  
  user_choice = gets.chomp.to_i

end











