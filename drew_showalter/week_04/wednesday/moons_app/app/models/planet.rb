# == Schema Information
#
# Table name: planets
#
#  id         :integer          not null, primary key
#  name       :string
#  orbit      :string
#  mass       :string
#  radius     :string
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Planet < ActiveRecord::Base
  has_many :moons
end
