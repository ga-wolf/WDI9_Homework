class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations
end
