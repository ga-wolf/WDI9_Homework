require 'pry'
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
  end

  def load_data
  end

  def save_data
  end

  # Start of Program
  def main
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

binding.pry