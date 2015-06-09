class Animal

  attr_accessor :name, :age, :gender, :species, :toys

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end 


  def to_s
    Rainbow("#{@name} is a #{@age} year old, #{@gender} #{@species}").cyan
  end

end