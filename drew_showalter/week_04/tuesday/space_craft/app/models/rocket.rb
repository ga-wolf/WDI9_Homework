# == Schema Information
#
# Table name: rockets
#
#  id          :integer          not null, primary key
#  name        :string
#  designer    :string
#  image       :text
#  year        :float
#  thrust      :float
#  mass        :float
#  height      :float
#  delV        :float
#  crew        :float
#  payload     :float
#  cost        :float
#  description :text
#  created_at  :datetime
#  updated_at  :datetime
#

class Rocket < ActiveRecord::Base
end
