class Animal
  
  attr_accessor :name, :age, :gender, :species, :num_toys

  def initialize(name, age, gender, species, num_toys)
    @name = name
    @age = 0
    @gender = gender
    @species = species
    @num_toys = 0
  end
end