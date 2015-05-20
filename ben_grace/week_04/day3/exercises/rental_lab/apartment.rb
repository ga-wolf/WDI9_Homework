class Apartment
  attr_accessor :name, :price, :sqft, :num_bedrooms, :num_bathrooms, :tenants

  def initialize(name, sqft, num_bedrooms, num_bathrooms)
    @price = 0
    @name = name
    @sqft = sqft
    @num_bedrooms = num_bedrooms
    @num_bathrooms = num_bathrooms
    @tenants = [] #this is indicating the Apartment is empty of tenants which we can then add.
  end

  def occupied?
    @tenants.any? #opposite is .empty?
  end
end