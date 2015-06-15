rails new projectName -T -d postgresql


Join Tables - used for has_many/belongs_to many.

  -Must be alphabetical.
  -Can store multiples of each id. eg song id 5 can belong to genre id 2, 7 and 8. genre 25 can belong to song 3, 5, 9.

Ususally the end with "many" is where you will store the id.



Use this from now on when making new rails files!...!!!
rails new tunr -T -d postgresql


database.yml

setup
 -host: localhost
 -username: citstudent


Before doing any of the below plan this shit out on paper! Do it you fuck!

<!-- rails new projectname -T -d postgresql
<edit database.yml to add host and username>
<check that postgresql is running (check for elephant on browser)
rake db:create This is massively important or you won't be able to migrate!

rails generate migration create_nametable
<fill in the table with what you want>
rake db:migrate
<crete the file.rb in the models folder>
annotate to check if it's working.

<Do the last 5 steps for as many model folders as you need>

rails generate migration create_genres_songs
will create a join table

 -->

<!--

THIS IS HOW YOU MAKE A JOIN TABLE
  rails generate migration create_genres_songs
  go to each corresponding model.rb file and add...
  has_and_belongs_to_many :modelName
  Do this for every neccesary file and double check your shit!

  Once this is done you can travel through models to access other models. You can only travel through one model at a time.
 -->


 SECURE PASSWORDS!!!..!!!!1....1

 gem 'bcrypt', '~> 3.1.7'

rails generate migration add_password_to_users
rake db:migrate

add this to the above migration
add_column :users, :password_digest, :string

add this to your user.rb
has_secure_password


=================

User login. 

.authenticate (params :password)


=============
setting up sessions!

rails generate controller Session new

get '/login' => 'session#new'
post '/login' => 'session#create'
delete '/login' => 'session#destroy'

=============


Problem

models required

wireframe

api

trickier bits

questions cunts?







