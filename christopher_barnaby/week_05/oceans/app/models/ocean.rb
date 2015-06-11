# == Schema Information
#
# Table name: oceans
#
#  id            :integer          not null, primary key
#  name          :string
#  image         :text
#  hemisphere    :string
#  volume        :float
#  maximum_depth :float
#  deepest_point :string
#  created_at    :datetime
#  updated_at    :datetime
#

class Ocean < ActiveRecord::Base
end
