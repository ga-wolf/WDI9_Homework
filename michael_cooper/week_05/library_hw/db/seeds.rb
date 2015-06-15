Author.destroy_all
Book.destroy_all

a = Author.create(:name => 'Michael Crichton', :nationality => 'American', :dob => '1942/10/23', :image => 'http://upload.wikimedia.org/wikipedia/commons/a/af/MichaelCrichton_2.jpg')
b = Book.create(:title => 'Jurassic Park', :genre => 'Science Fiction', :year => '1990', :cover => 'http://upload.wikimedia.org/wikipedia/en/3/33/Jurassicpark.jpg')

a.books << b