class User < ActiveRecord::Base
  has_many :reservations
end
