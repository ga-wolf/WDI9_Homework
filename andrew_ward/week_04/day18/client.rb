class Client

  attr_accessor :name, :number_of_children, :age, :number_of_pets

  def initialize name, number_of_children, age, number_of_pets
    @name = name
    @number_of_children = number_of_children
    @age = age
    @number_of_pets = number_of_pets
    @pets = []
  end

  def display
    puts Rainbow("#{@name} is #{@age} years old with #{@number_of_children} children and #{@number_of_pets}.").yellow
  end
end