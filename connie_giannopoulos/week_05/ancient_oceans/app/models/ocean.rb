# == Schema Information
#
# Table name: oceans
#
#  id          :integer          not null, primary key
#  name        :string
#  image       :text
#  depth       :float
#  location    :string
#  climate     :string
#  life_forms  :text
#  time_period :string
#  created_at  :datetime
#  updated_at  :datetime
#

class Ocean < ActiveRecord::Base
end

# This references the ocean table and interacts, sends info back and forth.
