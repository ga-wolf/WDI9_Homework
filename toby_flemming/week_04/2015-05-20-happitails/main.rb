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

  def get_string
    gets.chomp.upcase
  end

  def get_fixnum
    get_string.to_i
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
    
    if f && f.size > 0
      @shelter = YAML.load f.read
      f.close
    end
  end

  def save_data
    f = File.new "data", "w"

    if f
      f.puts @shelter.to_yaml
      f.close
    end
  end

  def display_animals
    @shelter[:animals].each_with_index { |animal, i| puts "[#{i}] #{animal.to_s}" }
  end

  def display_clients
    @shelter[:clients].each_with_index { |client, i| puts "[#{i}] #{client.to_s}" }
  end

  def create_animal
    print "Name: "
    name = get_string

    print "Age: "
    age = get_fixnum

    print "Gender: "
    gender = get_string

    print "Species: "
    species = get_string

    @shelter[:animals] << Animal.new(name, age, gender, species)
  end

  def create_client
    print "Name: "
    name = get_string

    print "No of Children: "
    children = get_fixnum

    print "Age: "
    age = get_fixnum

    shelter[:clients] << Client.new(name, children, age)
  end

  def adopt_animal
    print "Animal Name: "

  end

  def give_up_animal

  end

  def main
    option = ""

    load_data

    show_menu
    while option != 'q'
      print "> "
      option = gets.chomp.downcase

      display_animals if option == 'da'
      display_clients if option == 'dc'
      create_animal if option == 'ca'
      create_client if option == 'cc'

      show_menu if option == 'c'
    end

    save_data
  end

end








# Create Program Instance
happitails = Happitails.new

# Animals
# happitails.shelter[:animals] << Animal.new("Ruby", 10, "F", "Cat")
# happitails.shelter[:animals] << Animal.new("Jasper", 7, "M", "Cat")
# happitails.shelter[:animals] << Animal.new("Sally", 1, "F", "Dog")
# happitails.shelter[:animals] << Animal.new("Goldy", 15, "M", "Fish")

# # Clients
# happitails.shelter[:clients] << Client.new("Toby", 0, 22)
# happitails.shelter[:clients] << Client.new("Crazy Cat Lady", 0, 85)

happitails.main

