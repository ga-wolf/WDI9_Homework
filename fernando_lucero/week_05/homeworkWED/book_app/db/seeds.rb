# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Author.destroy_all
Book.destroy_all

a1 = Author.create(:name => 'J. R. R. Tolkien', :nationality => 'British', :dob => '03/01/1892', :image => 'http://skepticism-images.s3-website-us-east-1.amazonaws.com/images/jreviews/tolkien.jpg')
b1 = Book.create(:title => 'Lord of the Rings', :isdn => '#2387546', :publication => '1993/04/28', :genre => 'Fantasy', :image => 'http://fc05.deviantart.net/fs71/f/2012/043/0/4/the_lord_of_the_rings_golden_movie_logo_by_freeco-d4phvpy.jpg')

a1 = Author.create(:name => 'John Milton', :nationality => 'British', :dob => '03/01/1629', :image => 'http://www.stephenhicks.org/wp-content/uploads/2012/12/john-milton-300x300.jpg')
b1 = Book.create(:title => 'Paradise Lost', :isdn => '#5673498', :publication => '05/21/1667', :genre => 'Mythology', :image => 'http://www.metalinsider.net/site/wp-content/uploads/2012/06/lost-in-time.jpg')

a1 = Author.create(:name => 'Timothy Zahn', :nationality => 'American', :dob => '07/01/1951', :image => 'http://www.thenerdelement.com/wordpress/wp-content/uploads/2014/04/IMG_0083.jpg')
b1 = Book.create(:title => 'Heir to the Empire', :isdn => '#9845034', :publication => '01/05/1991', :genre => 'Sci-Fiction', :image => 'http://pxhst.co/avaxhome/70/6f/001e6f70_medium.jpeg')

# a1.works = [ w1 ]
# w1.artist = a1; w1.save
# w1.artist_id = a1.id; w1.save

a1.books << b1