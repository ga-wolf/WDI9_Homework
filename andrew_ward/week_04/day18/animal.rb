class Animal

  attr_accessor :name, :age, :gender, :species, :toys

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def display
    puts Rainbow("#{@name} is #{@age} years old and is a #{@gender} #{@species}.").yellow
  end

end