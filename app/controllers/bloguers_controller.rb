class BloguersController < ApplicationController
  def show
    @blog = Bloguer.find(params[:id])
  end
  def index
    @bloguers = Bloguer.all
  end
end
