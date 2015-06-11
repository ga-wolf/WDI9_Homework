# == Schema Information
#
# Table name: gods
#
#  id          :integer          not null, primary key
#  name        :string
#  image       :text
#  description :text
#  faction     :string
#  symbol      :string
#  children    :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class God < ActiveRecord::Base
end
