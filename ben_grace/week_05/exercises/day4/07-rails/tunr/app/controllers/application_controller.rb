class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :authenticate

  private
  def authenticate
    @current_user = User.find session[:user_id] if session[:user_id] #this if statement checks if a current user is logged in. If they aren't then it doesn't display the user id but still lets them access the page.
  end
end
