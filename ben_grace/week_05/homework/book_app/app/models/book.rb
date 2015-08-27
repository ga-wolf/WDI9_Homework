# == Schema Information
#
# Table name: books
#
#  id           :integer          not null, primary key
#  title        :string
#  genre        :string
#  release_date :date
#  blurb        :text
#  created_at   :datetime
#  updated_at   :datetime
#  image        :text
#

class Book < ActiveRecord::Base
  belongs_to :author
end
