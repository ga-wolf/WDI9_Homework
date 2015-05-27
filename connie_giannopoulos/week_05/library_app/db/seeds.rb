Book.destroy_all
Author.destroy_all

Book.create(:title => 'Northen Lights', :category => 'Fantasy', :isbn => 123456, :pub_date => '1893/04/20', :image => 'http://www.biggreenbookshop.com/images/uploads/15%20northernlights.jpg', :blurb => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' )

Author.create(:name => 'Philip Pullman', :age => 40, :bio => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', :image => 'http://static.guim.co.uk/sys-images/Books/Pix/pictures/2010/8/12/1281616880648/Philip-Pullman-006.jpg')

