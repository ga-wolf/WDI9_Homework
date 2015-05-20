require 'pry'
require 'yaml'

require_relative 'animal'
require_relative 'client'

class Happitails
  # include Singleton
  attr_accessor :shelter

  def initialize
    @shelter = {:animals => [], :clients => []}
  end

  def give_up_animal
    # Will need prompt
  end

  def adopt_animal
    # Will need prompt
  end

  def show_menu
    system "clear"
    puts "------------------------"
    puts "    Animal  Shelter"
    puts "------------------------"
    puts "[da]  Display All Animals"
    puts "[dc]  Display All Clients"
    puts "[ca]  Create An Animal"
    puts "[cc]  Create A Client"
    puts "[aa]  Adopt Animal"
    puts "[ga]  Give Up Animal"
    puts ""
    puts "[c]   Clear Screen"
    puts "[q]   Quit"
    puts "------------------------"
  end

  def load_data
    f = File.open "data"
  end

  def save_data
    f = File.new "data", "w"
    f.puts @shelter.to_yaml
    f.close
  end

  def main
    option = ""

    show_menu
    while option != 'q'
      print "> "
      option = gets.chomp.downcase

      show_menu if option == 'c'
    end
  end

end








# Create Program Instance
happitails = Happitails.new

# Animals
happitails.shelter[:animals] << Animal.new("Ruby", 10, "F", "Cat")
happitails.shelter[:animals] << Animal.new("Jasper", 7, "M", "Cat")
happitails.shelter[:animals] << Animal.new("Sally", 1, "F", "Dog")
happitails.shelter[:animals] << Animal.new("Goldy", 15, "M", "Fish")

# Clients
happitails.shelter[:clients] << Client.new("Toby", 0, 22, 0)
happitails.shelter[:clients] << Client.new("Crazy Cat Lady", 0, 85, 100)

# binding.pry
happitails.main
