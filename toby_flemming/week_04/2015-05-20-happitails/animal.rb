class Animal 
  attr_reader :name, :age, :gender, :species, :toys
  attr_accessor :toys

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
  end

end
