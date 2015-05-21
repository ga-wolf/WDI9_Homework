class Client

  attr_accessor :name, :number_of_children, :age, :number_of_pets, :pets

  def initialize name, number_of_children, age
    @name = name
    @number_of_children = number_of_children
    @age = age
    @number_of_pets = 0
    @pets = []
  end

  def display
    puts Rainbow("#{@name} is #{@age} years old with #{@number_of_children} children and #{@number_of_pets}.").yellow
  end
end