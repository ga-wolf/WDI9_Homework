class Client

  attr_accessor :name, :age, :num_children, :pets

  def initialize(name, age, num_children)
    @name = name
    @age = age
    @num_children = num_children
    @pets = []
  end


  def to_s
    Rainbow("#{@name} is #{@age} with #{@num_children} children and #{@pets.length} pets").yellow
  end

end