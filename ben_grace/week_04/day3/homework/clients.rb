# Client:

# A client should have a name.
# A client should have a number of children.
# A client should have an age.
# A client should have a number of pets.

class Client
  attr_accessor :name, :num_children, :age, :num_pets

  def initialize (name, age, num_children, num_pets)
    @name = name
    @age = age
    @num_children = num_children
    @num_pets = num_pets
  end
end