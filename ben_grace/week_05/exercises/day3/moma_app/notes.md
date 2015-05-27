rails new book_app -T Makes the new directory (the -T means don't add the test files)

add and bundle the gems

rails g remove_turbolinks:remove

bundle again

rails generate migration create_authors 

rails generate migration create_books

rake db:migrate

touch app/models/author.rb
touch app/models/book.rb

annotate

rake db:seed (once you have filled in the seed data)

rake routes

rails generate controller Authors index create new edit show update destroy
rails generate controller Books index create new edit show update destroy


======

rails g migration add_author_id_to_works

rake db:migrate


Author
  -Name string
  -Nationality string
  -Dob date
  -Image text
Book
  - Title string
  - Release_date date
  - Genre string
  - Blurb Text


