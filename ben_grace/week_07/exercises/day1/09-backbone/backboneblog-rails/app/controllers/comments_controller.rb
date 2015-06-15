class CommentsController < ApplicationController

  def index
    @post = Post.find params[:post_id]
    @comments = @post.comments
    render :json => @comments
  end

  def create
  comment = Comment.create comment_params
  render :json => comment

  end

  private
  def comment_params
    params.require(:comment).permit(:author, :content, :post_id)
  end
end
