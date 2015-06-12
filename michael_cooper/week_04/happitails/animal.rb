require 'rainbow'
class Animal
  attr_accessor :name, :age, :gender, :species, :toys, :owned

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
    @owned = false
  end

  def give_toy toy
    @toys.push(toy)
  end

  def to_s
    Rainbow("- #{@name.capitalize} is a #{@gender} #{@species}, aged #{@age}.").green
  end
end