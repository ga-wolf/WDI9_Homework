# Animal:

# An animal should have a name.
# An animal should have an age.
# An animal should have a gender.
# An animal should have a species.
# An animal can have multiple toys.
class Animal
  attr_accessor :name, :age, :gender, :species, :toys

  def initialize (name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def list_animals
    "#{@name} is a #{@age} year old #{@gender} #{@species} who enjoys playing with #{@toys.to_s}"
  end

  def any_toys?
    @toys.any?
  end
end