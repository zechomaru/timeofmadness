class BloguersController < ApplicationController

  def show
    @blog = Bloguer.find(params[:id])
    @post = Post.where(bloguer_id: params[:id]).order(view: :desc).limit(3)
    @posts = Post.where(bloguer_id: params[:id])
  end

  def index
    @bloguers = Bloguer.all
  end

end
