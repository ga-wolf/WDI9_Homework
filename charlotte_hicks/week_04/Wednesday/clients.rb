class Client
  attr_accessor :name, :age, :num_children, :num_pets

  def initialize(name, age, num_children, num_pets)
    @name = name
    @age = age
    @num_children = num_children
    @num_pets = num_pets
    @pets_adopted = []
  end
end