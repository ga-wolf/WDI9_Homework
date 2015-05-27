# == Schema Information
#
# Table name: moons
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

class Moon < ActiveRecord::Base
  belongs_to :planet
end
