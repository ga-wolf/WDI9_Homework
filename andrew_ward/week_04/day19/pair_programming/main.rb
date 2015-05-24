require 'sinatra'
require 'sinatra/reloader'

get '/' do

@question = "Do you have a test for that?"

@yes = "YES"

@no = "NO"

erb :pair

end

get '/write_test' do

  @command = "Write a test."

  @confirm = "DONE"

  erb :write_test

end

get '/test_pass' do

  @question = "Does the test pass?"

  @yes = "YES"

  @no = "NO"

  erb :test_pass

end

get '/write_enough' do

  @command = "Write just enough code for the test to pass."

  @confirm = "DONE"

  erb :write_enough

end

get '/need_to_refactor' do

  @question = "Do you need to refactor?"

  @yes = "YES"

  @no = "NO"

  erb :need_to_refactor

end

get '/refactor' do

  @command = "Refactor the code."

  @confirm = "DONE"

  erb :refactor

end

get '/new_feature' do

  @command = "Select a new feature to implement."

  @confirm = "DONE"

  erb :new_feature

end


























