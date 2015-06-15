# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime
#  updated_at :datetime
#

class Artist < ActiveRecord::Base
  has_many :songs
  has_many :albums, :through => :songs #This can only be along one level. It can't travel through other models.
  has_many :genres, :through => :songs
end
