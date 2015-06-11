
# Client:
# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a number of pets.
# Relationships:
# A client should be able to adopt an animal.
# A client should be able to put an animal up for adoption.

class Client
  attr_accessor :name, :num_children, :age, :num_pets, :animals
  def initialize(name, age, num_children)
    @name = name
    @num_children = num_children
    @age = age
    @animals = []
    @num_pets = 0
  end

  def adopt (animal_name)
    @num_pets += 1
    @animals << $shelter["animals"].select { |el| el.name == animal_name }
    $shelter["animals"].delete_if { |el| el.name == animal_name }
  end

  def unadopt (animal_name)
    @num_pets -= 1
    $shelter["animals"] << @animals.select { |el| el[0].name == animal_name }[0][0]
    @animals.delete_if { |el| el[0].name == animal_name }
  end

end