require 'rainbow'
class Client
  attr_accessor :name, :num_children, :age, :num_pets

  def initialize name, num_children, age
    @name = name
    @num_children = num_children
    @age = age
    @num_pets = 0
    @pets = []
  end

  def adopt_animal pet_name
    $shelter[:animals].each do |pet|
      if pet.name.downcase == pet_name.downcase
        pet.owned = true
        @num_pets += 1
        @pets.push(pet)
      else
        print "Animal not found"
      end
    end
  end

 def to_s
    Rainbow("- #{@name} is a #{@age} year old person with #{@num_children} children, they currently own #{num_pets} pets.").green
  end
end
