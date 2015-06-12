class PagesController < ApplicationController
  def home
    github = Github.new client_id: '85de6db51b15ce31b165', client_secret: '43121ec2cee36177f0715970ef30b65db8ecacb1'
    github.authorize_url redirect_uri: 'http://localhost', scope: 'repo'
  end
end
