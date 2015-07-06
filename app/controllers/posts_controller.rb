class PostsController < ApplicationController
  before_action :authenticate_bloguer!

  def index
    bloguer = current_bloguer.id
    bloguerPost = Bloguer.where(id: bloguer)
    @posts = Post.where(bloguer_id: bloguerPost).order('id DESC')
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.bloguer_id = current_bloguer.id
    if @post.save
      render :edit
    end
  end

  def image
    @image = Post.new(post_params)
    @image.bloguer_id = current_bloguer.id
    if @image.save
      render :edit
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render :edit
      #redirect_to(@post)
    else

    end
  end
  def destroy

  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :bloguer_id, :view, :picture)
  end
end
