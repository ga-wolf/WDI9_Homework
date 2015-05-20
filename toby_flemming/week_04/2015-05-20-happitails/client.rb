class Client
  attr_reader :name, :children, :age, :pets

  def initialize name, children, age, pets
    @name = name
    @children = children
    @age = age
    @pets = pets
  end

end