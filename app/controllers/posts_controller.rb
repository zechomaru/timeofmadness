class PostsController < ApplicationController
  layout "post", :only => :show
  before_action :authenticate_bloguer!, :except => [:show]
  impressionist actions: [:show]

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
      redirect_to posts_url
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
    impressionist(@post)
    @post.impressionist_count
    #develoment
    #@aleatorio = Post.order("RANDOM()").limit(4)
    #production
    @aleatorio = Post.limit(5).order("RAND()")
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to(@post)
    else

    end
  end
  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      redirect_to posts_url
    else

    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :body, :bloguer_id, :view, :picture, :bootsy_image_gallery_id)
  end
end
