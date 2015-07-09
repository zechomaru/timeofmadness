class BloguersController < ApplicationController

  def show
    @blog = Bloguer.find(params[:id])
    @post = Post.where(bloguer_id: params[:id]).order(view: :desc).limit(3)
    @posts = Post.where(bloguer_id: params[:id])
  end

  def index
    @bloguers = Bloguer.all
  end

  def edit
    @bloguer = Bloguer.find(params[:id])
  end

  def update
    @bloguer = Bloguer.find(params[:id])
    if @bloguer.update(bloguer_params)
      redirect_to(@bloguer)
    else

    end
  end

  private
  def bloguer_params
    params.require(:bloguer).permit(:name, :lastname, :avatar, :text, :facebook , :twitter, :instagram, :youtube)
  end

end



