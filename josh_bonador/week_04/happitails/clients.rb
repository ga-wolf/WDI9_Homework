class Client
  attr_accessor :name, :num_children, :age, :num_pets, :pets

  def initialize name, num_children, age
    @name = name
    @num_children = num_children
    @age = age
    @num_pets = 0
    @pets = []
  end

  def adopt pets
    
  end

  def to_s
    "#{@name} is #{@age} years old. They have #{@num_children} children and #{@num_pets} pets. Pets owned by #{@name}: #{@pets}"
  end
end
