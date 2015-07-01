class HomeController < ApplicationController
  def index
    @bloguers = Bloguer.order("RANDOM()").limit(4)
    @posts = Post.all
  end
end
