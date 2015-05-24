class Animal
  attr_accessor :name, :age, :gender, :species, :toy

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toy = []
  end 
  def to_s
    "#{@name} is a #{gender} #{@species} and is #{age} years old"
  end
end
